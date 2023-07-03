import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, prevStep, changePlans } from "./../redux/actions";

const StepFour = () => {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.stepTwoReducer);
  const addOnsPlans = useSelector((state) => state.stepThreeReducer);

  const selectedAddOnsPlans = addOnsPlans.filter((plan) => plan.checked); // add-ons plans selected by user

  const selectedPlans = plans.filter((plan) => plan.checked); //selected plans by user
  const { planDuration, price, text } = selectedPlans[0];
  const selectedPlanPrice =
    planDuration === "monthly" ? price.monthly : price.yearly;
  const period = planDuration === "monthly" ? "mo" : "yr";

  // calculate total price of selected plans;
  const totalPrice = [
    selectedPlanPrice,
    ...selectedAddOnsPlans.map((plan) => {
      const { price } = plan;
      return planDuration === "Monthly" ? price.monthly : price.yearly;
    }),
  ].reduce((total, amount) => {
    return (total += parseInt(amount));
  }, 0);

  return (
    <article className="steps">
      <h2>Finishing up</h2>
      <p>Double-check everything look OK before continuing</p>

      <div className="step__check_container">
        {/* plans */}
        <div className="plans__wrapper">
          <div className="step__check__plan">
            <div>
              <h4>{`${text} (${planDuration})`}</h4>
              <button onClick={() => dispatch(changePlans())}>Change</button>
            </div>
            <p>
              <strong>
                ${selectedPlanPrice}/{period}
              </strong>
            </p>
          </div>

          {/* add-ons plans */}
          {selectedAddOnsPlans.map((plan) => {
            const { type, price } = plan;

            const addOnsPrice =
              planDuration === "Monthly" ? price.monthly : price.yearly; // display price based on plans selected by user

            return (
              <div className="step__check__addOns-plans" key={plan.id}>
                <p>{type}</p>
                <p>
                  +${addOnsPrice}/{period}
                </p>
              </div>
            );
          })}
        </div>

        {/* price total */}
        <div className="price__total__container">
          <p>
            Total (per{" "}
            {planDuration.substring(0, planDuration.length - 2).toLowerCase()})
          </p>
          <p>
            <strong>
              ${totalPrice}/{period}
            </strong>
          </p>
        </div>

        {/* prev and next btn */}
        <div className="button__container separate">
          <button className="btn prev-btn" onClick={() => dispatch(prevStep())}>
            Go back
          </button>
          <button className="btn next-btn" onClick={() => dispatch(nextStep())}>
            Confirm
          </button>
        </div>
      </div>
    </article>
  );
};

export default StepFour;
