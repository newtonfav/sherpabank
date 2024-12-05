export interface ITransaction {
  id: string;
  type: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  Accountid: string;
}

export default function getAccountBalance(transactions: ITransaction[]) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "deposit") {
      return balance + transaction.amount;
    } else if (transaction.type === "withdrawal") {
      return balance - transaction.amount;
    } else if (transaction.type === "transfer") {
      return balance - transaction.amount;
    }

    return balance;
  }, 0);
}
