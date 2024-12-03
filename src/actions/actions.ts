"use server";

import { revalidatePath } from "next/cache";
import prisma from "../app/_lib/db";
import { validateAmount } from "../helpers/validate-amount";
import { validateIBAN } from "../helpers/validate-iban";

const DEPOSIT_LIMIT = 10000000;

export async function transferMoney(
  state: { message: string },
  formData: FormData
): Promise<{
  success: boolean | null;
  message: string;
}> {
  try {
    const amount = Number(formData.get("amount"));
    const iban = formData.get("iban") as string;

    if (!validateIBAN(iban)) {
      return {
        success: false,
        message: "Invalid IBAN, enter a valid IBAN!",
      };
    }

    validateAmount(amount);

    const account = await getAccount();

    if (!account) {
      return {
        success: false,
        message: "Account not found",
      };
    }

    if (account.accountNumber === iban) {
      return {
        success: false,
        message: "You can't transfer money to yourself",
      };
    }

    if (account.balance < amount) {
      return {
        success: false,
        message: "Insufficient balance",
      };
    }

    await prisma.transaction.create({
      data: {
        type: "transfer",
        amount,
        Accountid: account.id,
      },
    });

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        balance: account.balance - amount,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: "Transfer successful",
    };
  } catch (error: unknown) {
    console.log(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function deposit(
  state: { message: string },
  formData: FormData
): Promise<{
  success: boolean | null;
  message: string;
}> {
  try {
    const amount = Number(formData.get("amount"));

    validateAmount(amount);

    const account = await getAccount();

    if (!account) {
      return {
        success: false,
        message: "Account not found",
      };
    }

    if (amount > DEPOSIT_LIMIT) {
      return {
        success: false,
        message: `Maximum deposit amount is $10M`,
      };
    }

    await prisma.transaction.create({
      data: {
        type: "deposit",
        amount,
        Accountid: account.id,
      },
    });

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        balance: account.balance + amount,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: "deposit successful",
    };
  } catch (error: unknown) {
    console.log(error);

    return {
      success: false,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function withdraw(
  state: { message: string },
  formData: FormData
): Promise<{
  success: boolean | null;
  message: string;
}> {
  try {
    const amount = Number(formData.get("amount"));

    validateAmount(amount);

    const account = await getAccount();

    if (!account) {
      return {
        success: false,
        message: "Account not found",
      };
    }

    if (account.balance < amount) {
      return {
        success: false,
        message: "Insufficient balance",
      };
    }

    await prisma.transaction.create({
      data: {
        type: "withdrawal",
        amount,
        Accountid: account.id,
      },
    });

    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        balance: account.balance - amount,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      message: "withdrawal successful",
    };
  } catch (error: unknown) {
    console.log(error);

    return {
      success: true,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export async function getAccount() {
  const account = await prisma.account.findUnique({
    where: {
      username: "sherpas",
    },
  });

  return account;
}
