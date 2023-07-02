import "./step.css";
import { useState } from "react";
import { validateInputValue } from "./validateInputValue";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, storeStepOneFormData } from "./../redux/actions/index";
//input  phone number library
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const StepOne = () => {
  const state = useSelector((state) => state.stepOneReducer);
  const { name, email, phone } = state; // destructing value from stepOne reducer

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

    // stop error from showing once user start typing
    setError((prevError) => ({ ...prevError, [name]: null }));
  };

  // validate form and proceed to next step.
  const validateAndProceedToNextStep = (e) => {
    e.preventDefault();

    // validate form
    const validationError = validateInputValue(values);
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      // store input value if there's no error in validation
      dispatch(storeStepOneFormData(values));

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
          {error.name && <span className="error">{error.name}</span>}
          <input
            className={error.name ? "input__error" : null}
            type="text"
            name="name"
            value={values.name}
            placeholder=" e.g. Stephen king"
            onChange={handleChange}
            autoFocus
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
          {error.phone && <span className="error ">{error.phone}</span>}

          <PhoneInput
            className={`PhoneInputInput ${error.phone && "input__error "}`}
            placeholder="e.g. +1 234 567 890"
            value={values.phone}
            onChange={(value) => {
              setValues({ ...values, phone: value });
              setError({ ...error, phone: null });
            }}
            keyboardtype="phone-pad"
          />
        </div>

        {/* next btn*/}
        <div className="button__container">
          <button
            className="btn next-btn"
            onClick={validateAndProceedToNextStep}
          >
            Next step
          </button>
        </div>
      </form>
    </article>
  );
};

export default StepOne;
