import { useState } from "react";

export default function Interval() {
  // const step = 2;
  let today = new Date().getDay;
  console.log(today);

  const [date, setDate] = useState(today);
  // console.log([step, setStep]);

  function handlePrevious() {
    // if (step > 1) setStep(s - 1);
    if (step > 1) setStep((s) => s - 1); // use callback function is safer
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step: {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
              //   onMouseOver={() => alert("hi")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
