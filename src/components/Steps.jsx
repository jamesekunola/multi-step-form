// css stylesheet
import "./step.css";

// components
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Summary from "./Summary";

const Steps = ({ stepIndex }) => {
  return (
    <div className="steps__container">
      {stepIndex === 1 && <StepOne stepIndex={stepIndex} />}
      {stepIndex === 2 && <StepTwo stepIndex={stepIndex} />}
      {stepIndex === 3 && <StepThree stepIndex={stepIndex} />}
      {stepIndex === 4 && <Summary stepIndex={stepIndex} />}
    </div>
  );
};

export default Steps;
