const PlansRadioBtn = ({ text, icon, price, gift, displayedPeriod }) => {
  return (
    <div>
      <div className="plan" key={text}>
        <input type="radio" name="plan" id={text} value={text} />
        <div className="plan__tile">
          <img src={icon} alt="plans icon" />
          <label htmlFor={text}>
            <h4>{text}</h4>
            <p>
              ${price}/{displayedPeriod === "Monthly" ? "mo" : "yr"}
            </p>
            {displayedPeriod === "yearly" && (
              <p className="gift__text">{gift}</p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlansRadioBtn;
