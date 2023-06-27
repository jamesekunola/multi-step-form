import React from "react";
import "./step.css";

import { UseSelector, useDispatch, useSelector } from "react-redux";
import { stepTwoReducer } from "./../redux/reducers/stepTwoReducer";
import { prevStep, nextStep } from "../redux/actions";

const addOnsPlans = [
  {
    type: "Online service",
    price: { monthly: 1, yearly: 10 },
    desc: "Access to multiplayer games",
  },
  {
    type: "Larger storage",
    price: { monthly: 2, yearly: 20 },
    desc: "Extra 1TB of cloud save",
  },
  {
    type: "Customizable profile",
    price: { monthly: 2, yearly: 20 },
    desc: "custom theme on your profile",
  },
];

const StepThree = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stepTwoReducer);
  const { displayedPeriod, period } = state;

  return (
    <article className="steps">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>

      <div className="add__ons__options__container">
        {addOnsPlans.map((plan) => {
          const { type, price, desc } = plan;
          const selectedPlanPrice =
            displayedPeriod === "Monthly" ? price.monthly : price.yearly;

          return (
            <div className="add__ons__option" key={type}>
              <label htmlFor={type}>
                <input type="checkbox" name="addOns" id={type} />
                <div className="add__ons__info">
                  <h4>{type}</h4>
                  <p>{desc}</p>
                </div>

                <p className="addOns__price">
                  ${selectedPlanPrice}/{period}
                </p>
              </label>
            </div>
          );
        })}

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

export default StepThree;
