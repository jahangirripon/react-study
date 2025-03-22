import { useState } from "react";

const messages = ["Learn React 🔯", "Apply for job 💼", "Invest 💵"];

export default function Steps() {
  // const step = 2;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
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
      <StepMessage step={step}>
        <p>Passing from another component as children 🎄 </p>
      </StepMessage>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* <p className="message">Step: {step}:</p> */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handlePrevious}
              //   onMouseOver={() => alert("hi")}
            >
              Previous
            </button> */}

            {/* <button
              style={{ backgroundColor: "#7950F2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
            <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}>
              {" "}
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}:</h3> {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
