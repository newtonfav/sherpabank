import Transfer from "./transfer";
import Deposit from "./deposit";
import Withdraw from "./withdraw";

export default function Operations() {
  return (
    <div className="w-5/12 flex flex-col gap-4">
      <Transfer />
      <Deposit />
      <Withdraw />
    </div>
  );
}
