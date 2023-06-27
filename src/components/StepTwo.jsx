import { nextStep, prevStep, toggleAndUpdatePlanType } from "../redux/actions";
import PlansRadioBtn from "./PlansRadioBtn";

// icons
import arcadeIcon from "../icons/icon-arcade.svg";
import advanceIcon from "../icons/icon-advanced.svg";
import proIcon from "../icons/icon-pro.svg";
// css
import "./step.css";
import { useSelector, useDispatch } from "react-redux";

const plans = {
  monthly: [
    {
      icon: arcadeIcon,
      text: "Arcade",
      price: "9",
      gift: "",
      period: "mo",
    },
    {
      icon: advanceIcon,
      text: "Advance",
      price: "12",
      gift: "",
      period: "mo",
    },
    {
      icon: proIcon,
      text: " Pro",
      price: "15",
      gift: "",
      period: "mo",
    },
  ],

  yearly: [
    {
      icon: arcadeIcon,
      text: "Arcade",
      price: "90",
      gift: "2 month free",
      period: "yr",
    },
    {
      icon: advanceIcon,
      text: "Advance",
      price: "120",
      gift: "2 month free",
      period: "yr",
    },
    {
      icon: proIcon,
      text: " Pro",
      price: "150",
      gift: "2 month free",
      period: "yr",
    },
  ],
};

const StepTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stepTwoReducer);
  const { displayedPeriod, name } = state;

  let displayedPeriodPlans =
    displayedPeriod === "Monthly" ? plans.monthly : plans.yearly;

  return (
    <article className="steps">
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>

      <div className="plans__options">
        {/* plans */}
        {displayedPeriodPlans.map((plan) => (
          <PlansRadioBtn
            key={plan.text}
            {...plan}
            name={name}
            displayedPeriod={displayedPeriod}
            dispatch={dispatch}
            toggleAndUpdatePlanType={toggleAndUpdatePlanType}
          />
        ))}

        {/* toggle btn */}
        <div className="period__toggle__container">
          <h4>Monthly</h4>
          <div
            className="switch__wrapper"
            onClick={() =>
              dispatch(
                toggleAndUpdatePlanType(
                  displayedPeriod === "Monthly"
                    ? { displayedPeriod: "yearly" }
                    : { displayedPeriod: "Monthly" }
                )
              )
            }
          >
            <span
              className={`period__switch ${
                displayedPeriod === "yearly" && "move"
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
