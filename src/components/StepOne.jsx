import "./step.css";
import { useState } from "react";
import { validateSteponeForm } from "./validateSteponeForm";

import { useSelector, useDispatch } from "react-redux";
import { nextStep, setStepOneInputValue } from "./../redux/actions/index";

const StepOne = () => {
  const state = useSelector((state) => state.stepOneReducer);
  const { name, email, phone } = state;
  const [values, setValues] = useState({
    name,
    email,
    phone,
  });
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  // update input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // function to show next step
  const displayNextStep = (e) => {
    e.preventDefault();

    // validate form
    const validationError = validateSteponeForm(values);
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      // store input value if there's no error in validation
      dispatch(setStepOneInputValue(values));

      // show next step
      dispatch(nextStep());
    }
  };

  return (
    <article className="steps">
      <h2>Personal info</h2>
      <p>
        Personal info Please provide your name, email address, and phone number.
      </p>

      <form autoComplete="off">
        {/* name input */}
        <div className="step__one__input-wrapper">
          <label htmlFor="name">Name</label>
          {error.name && <span className="error ">{error.name}</span>}
          <input
            className={error.name ? "input__error" : null}
            type="text"
            name="name"
            value={values.name}
            placeholder=" e.g. Stephen king"
            onChange={handleChange}
          />
        </div>
        {/* email input */}
        <div className="step__one__input-wrapper">
          <label htmlFor="email">Email Address</label>
          {error.email && <span className="error ">{error.email}</span>}
          <input
            className={error.email ? "input__error" : null}
            type="email"
            name="email"
            value={values.email}
            placeholder="e.g. stephenKing@lorem.com"
            onChange={handleChange}
          />
        </div>
        {/* phone input */}
        <div className="step__one__input-wrapper">
          <label htmlFor="phone">Phone Number</label>
          {error.phone && <span className="error ">phone error</span>}
          <input
            className={error.phone ? "input__error" : null}
            type="text"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={values.phone}
            onChange={handleChange}
          />
        </div>

        {/* next btn*/}
        <div className="button__container">
          <button className="btn next-btn" onClick={displayNextStep}>
            Next step
          </button>
        </div>
      </form>
    </article>
  );
};

{
  /* <div className={`button__container ${stepIndex > 1 && "separate"}`}>
  {stepIndex > 1 && <button className="btn prev-btn">Go back</button>}
  <button className="btn next-btn" onClick={displayNextStep}>
    {stepIndex === 3 ? "confirm" : "next step"}
  </button>
</div>; */
}

export default StepOne;
