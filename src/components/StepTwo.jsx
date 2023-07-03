import { nextStep, prevStep, togglePlansDuration } from "../redux/actions";
import PlansRadioBtn from "./PlansRadioBtn";
// css
import "./step.css";
import { useSelector, useDispatch } from "react-redux";

const StepTwo = () => {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.stepTwoReducer);

  return (
    <article className="steps">
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>

      <div className="plans__options">
        {/* plans */}
        <div className="plans__radioBtn__container">
          {plans.map((plan, index) => (
            <PlansRadioBtn
              key={plan.text}
              {...plan}
              dispatch={dispatch}
              index={index}
            />
          ))}
        </div>

        {/* toggle btn */}
        <div className="period__toggle__container">
          <h4>Monthly</h4>
          <div
            className="switch__wrapper"
            onClick={() =>
              dispatch(
                togglePlansDuration(
                  plans[0].planDuration === "monthly" ? "yearly" : "monthly"
                )
              )
            }
          >
            <span
              className={`period__switch ${
                plans[0].planDuration === "yearly" && "move"
              }`}
            ></span>
          </div>
          <h4>Yearly</h4>
        </div>

        {/* prev and next btn */}
        <div className="button__container separate">
          <button className="btn prev-btn" onClick={() => dispatch(prevStep())}>
            Go back
          </button>
          <button className="btn next-btn" onClick={() => dispatch(nextStep())}>
            next step
          </button>
        </div>
      </div>
    </article>
  );
};

export default StepTwo;
