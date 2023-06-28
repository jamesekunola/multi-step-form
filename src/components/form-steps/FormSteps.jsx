import React from "react";
import "./formsteps.css";

const steps = [
  { no: 1, text: "your info" },
  { no: 2, text: "select plan" },
  { no: 3, text: "add-ons" },
  { no: 4, text: "summary " },
];

const activeStep = (stepIndex, index) => {
  if (stepIndex === index + 1) return "active";
  if (stepIndex === 5 && index === 3) return "active";

  return null;
};

const FormSteps = ({ stepIndex }) => {
  return (
    <article className="formsteps">
      <div className="formsteps__container">
        {/* steps */}
        {steps.map((step, index) => (
          <div className="formsteps__step" key={step.no}>
            <span className={activeStep(stepIndex, index)}>{step.no}</span>
            <div className="formsteps__text">
              <p>step {step.no}</p>
              <h3>{step.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default FormSteps;
