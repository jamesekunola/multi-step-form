import { useState } from "react";
import { nextStep, prevStep } from "../redux/actions";
import { useDispatch } from "react-redux";
import PlansRadioBtn from "./PlansRadioBtn";

// icons
import arcadeIcon from "../icons/icon-arcade.svg";
import advanceIcon from "../icons/icon-advanced.svg";
import proIcon from "../icons/icon-pro.svg";
// css
import "./step.css";
import { useSelector } from "react-redux";

const plans = {
  monthly: [
    {
      icon: arcadeIcon,
      text: "Arcade",
      price: "9",
      gift: "",
    },
    {
      icon: advanceIcon,
      text: "Advance",
      price: "12",
      gift: "",
    },
    {
      icon: proIcon,
      text: " Pro",
      price: "15",
      gift: "",
    },
  ],

  yearly: [
    {
      icon: arcadeIcon,
      text: "Arcade",
      price: "90",
      gift: "2 month free",
    },
    {
      icon: advanceIcon,
      text: "Advance",
      price: "120",
      gift: "2 month free",
    },
    {
      icon: proIcon,
      text: " Pro",
      price: "150",
      gift: "2 month free",
    },
  ],
};

const StepTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stepOneReducer);
  const [displayedPeriod, setDisplayedPeriod] = useState("Monthly");

  const togglePeriod = () => {
    setDisplayedPeriod((prevPeriod) => {
      const period = prevPeriod === "Monthly" ? "yearly" : "Monthly";
      return period;
    });
  };

  let displayedPeriodPlans =
    displayedPeriod === "Monthly" ? plans.monthly : plans.yearly;

  return (
    <article className="steps">
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>

      <div className="plans__options">
        {/* plans */}
        {displayedPeriodPlans.map((plan) => (
          <PlansRadioBtn {...plan} displayedPeriod={displayedPeriod} />
        ))}

        {/* toggle btn */}
        <div className="period__toggle__container" onClick={togglePeriod}>
          <h4>Monthly</h4>
          <div className="switch__wrapper">
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
