"use server";

import { revalidatePath } from "next/cache";
import prisma from "../app/_lib/db";

export async function transferMoney() {
  console.log("transferred..");
}

export async function deposit(formData: FormData) {
  const amount = Number(formData.get("amount"));

  await prisma.transaction.create({
    data: {
      type: "deposit",
      amount,
    },
  });

  revalidatePath("/");
}

export async function withdraw(formData: FormData) {
  const amount = Number(formData.get("amount"));

  await prisma.transaction.create({
    data: {
      type: "withdrawal",
      amount,
    },
  });

  revalidatePath("/");
}
