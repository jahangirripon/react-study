import { useState } from "react";

export default function TipCalc({ onAddItems }) {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);
  const tip = (bill * (myRating + friendRating)) / 2 / 100;
  function handleReset() {
    setBill("");
    setMyRating(0);
    setFriendRating(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={myRating} onSelect={setMyRating}>
        Your Rating:
      </SelectPercentage>
      <SelectPercentage percentage={friendRating} onSelect={setFriendRating}>
        Your Friends Rating:
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );

  function BillInput({ bill, onSetBill }) {
    return (
      <div>
        <label>Bill::</label>
        <input
          type="text"
          placeholder="Bill..."
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </div>
    );
  }

  function SelectPercentage({ children, percentage, onSelect }) {
    return (
      <div>
        <label>{children}</label>
        <select
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value={0} key={0}>
            Not Satisfied - 0%
          </option>
          <option value={5} key={1}>
            Okay - 5%
          </option>
          <option value={10} key={2}>
            Good - 10%
          </option>
          <option value={20} key={3}>
            Very Satisfied - 20%
          </option>
        </select>
      </div>
    );
  }

  function OutPut({ bill, tip }) {
    return (
      <h3>
        You pay ${bill + tip} ({bill}$ + ${tip} tip)
      </h3>
    );
  }

  function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
}
