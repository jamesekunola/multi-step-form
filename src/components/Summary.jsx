import checkedIcon from "../icons/icon-thank-you.svg";
import "./step.css";

const Summary = () => {
  return (
    <article className="steps">
      <div className="summary__container">
        <img src={checkedIcon} alt="success" />
        <h1 className="hey">Thank You</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. if you ever need support, please feel free to email us
          at{" "}
          <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>
        </p>
      </div>
    </article>
  );
};

export default Summary;
