const PlansRadioBtn = ({
  name,
  text,
  icon,
  price,
  gift,
  period,
  displayedPeriod,
  dispatch,
  toggleAndUpdatePlanType,
}) => {
  const selectedPlansValues = { name: text, price, period, gift };
  return (
    <div>
      <div className="plan" key={text}>
        <input
          type="radio"
          name="plan"
          id={text}
          value={text}
          checked={name === text}
          onChange={() =>
            dispatch(toggleAndUpdatePlanType({ ...selectedPlansValues }))
          }
        />
        <div className="plan__tile">
          <img src={icon} alt={`${text} icon`} />
          <label htmlFor={text}>
            <h4>{text}</h4>
            <p>
              ${price}/{period}
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
