import "./step.css";

import { useDispatch, useSelector } from "react-redux";
import { prevStep, nextStep, toggleAddOnsPlans } from "../redux/actions";

const StepThree = () => {
  const dispatch = useDispatch();
  const stepTwoState = useSelector((state) => state.stepTwoReducer);
  const addOnsPlans = useSelector((state) => state.stepThreeReducer);

  const { planDuration } = stepTwoState[0];
  const plansDurationAlias = planDuration === "monthly" ? "mo" : "yr";

  return (
    <article className="steps">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>

      <div className="add__ons__options__container">
        {addOnsPlans.map((plan) => {
          const { type, price, desc, checked, id } = plan;
          const subscriptionPrice =
            planDuration === "monthly" ? price.monthly : price.yearly;

          return (
            <div className="add__ons__option" key={type}>
              <label htmlFor={type}>
                <input
                  type="checkbox"
                  name="addOns"
                  id={type}
                  checked={checked}
                  onChange={() => dispatch(toggleAddOnsPlans(id))}
                />

                <div className="add__ons__info">
                  <h4>{type}</h4>
                  <p>{desc}</p>
                </div>

                <p className="addOns__price">
                  ${subscriptionPrice}/{plansDurationAlias}
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
