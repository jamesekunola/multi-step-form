import { useRef } from "react";
import "./step.css";

const StepOne = () => {
  // hooks
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = () => {
    console.log("submited");
  };

  return (
    <div>
      <h2>Personal info</h2>
      <p>
        Personal info Please provide your name, email address, and phone number.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name
            <p className="error ">This field is required</p>
            <input type="text" name="name" placeholder=" e.g. Stephen king" />
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
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
