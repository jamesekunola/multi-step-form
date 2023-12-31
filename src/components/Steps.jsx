// css stylesheet
import "./step.css";

// components
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";

const Steps = ({ stepIndex }) => {
  return (
    <div className="steps__container">
      {stepIndex === 1 && <StepOne />}
      {stepIndex === 2 && <StepTwo />}
      {stepIndex === 3 && <StepThree />}
      {stepIndex === 4 && <StepFour />}
      {stepIndex === 5 && <Summary />}
    </div>
  );
};

export default Steps;
