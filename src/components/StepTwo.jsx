import { useState } from "react";
import { nextStep, prevStep } from "../redux/actions";
import { useDispatch } from "react-redux";

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
      price: "9",
      gift: "two month free",
    },
    {
      icon: advanceIcon,
      text: "Advance",
      price: "12",
      gift: "two month free",
    },
    {
      icon: proIcon,
      text: " Pro",
      price: "15",
      gift: "two month free",
    },
  ],
};

const StepTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stepOneReducer);
  const [displayedPeriod, setDisplayedPeriod] = useState("Monthly");

  let displayedPeriodPlans =
    displayedPeriod === "Monthly" ? plans.monthly : plans.yearly;

  return (
    <article className="steps">
      <h2>Select your plan</h2>
      <p>you have the option of monthly or yearly billing</p>

      <div className="plans__options">
        {displayedPeriodPlans.map((plan) => {
          const { id, text, icon, price, gift } = plan;
          return (
            <div className="plan" key={plan.id}>
              <input type="radio" name="plan" id={text} />
              <div className="plan_tile">
                <label htmlFor={text}>{text}</label>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default StepTwo;
