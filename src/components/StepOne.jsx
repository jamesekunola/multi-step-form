// hooks
import { useRef } from "react";
// components
import Buttons from "./Buttons";
// css stylesheet
import "./step.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const StepOne = () => {
  const state = useSelector((state) => state.stepOneReducer);
  const { name, email, phone } = state;
  // hooks
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // set input values to initial store value
  useEffect(() => {
    nameRef.current.value = name;
    emailRef.current.value = email;
    phoneRef.current.value = phone;
  });

  const handleSubmit = () => {
    console.log("submited");
  };

  return (
    <div className="steps">
      <h2>Personal info</h2>
      <p>
        Personal info Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit} autocomplete="off">
        <div>
          <label htmlFor="name">
            Name
            <p className="error ">This field is required</p>
            <input
              type="text"
              name="name"
              placeholder=" e.g. Stephen king"
              ref={nameRef}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email Address
            <p className="error ">This field is required</p>
            <input
              type="email"
              name="email"
              placeholder="e.g. stephenKing@lorem.com"
              ref={emailRef}
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone Number
            <p className="error ">This field is required</p>
            <input
              type="number"
              name="phone"
              placeholder="e.g. +1 234 567 890"
              ref={phoneRef}
            />
          </label>
        </div>
      </form>

      <Buttons />
    </div>
  );
};

export default StepOne;
