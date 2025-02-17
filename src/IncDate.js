import { useState } from "react";

export default function IncDate() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  //   const [date, setDate] = useState(date);
  // console.log([date, setDate]);

  return (
    <>
      <div className="">
        <div>
          <button onClick={() => setStep((s) => s - 1)}>--</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((s) => s + 1)}>++</button>
        </div>
        <div>
          <button onClick={() => setCount((c) => c - step)}>--</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>++</button>
        </div>

        <p className="message">
          <span>
            {count === 0
              ? "Today is: "
              : count > 0
              ? `${count} days from today is:`
              : `${count} days ago was:`}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
