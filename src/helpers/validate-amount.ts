export function validateAmount(amount: number) {
  if (isNaN(amount) || amount <= 0) {
    throw new Error("Enter a valid amount");
  }
}
