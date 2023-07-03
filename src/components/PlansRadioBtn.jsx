import { updateSelectedPlans } from "../redux/actions";

const PlansRadioBtn = ({
  icon,
  text,
  price,
  gift,
  checked,
  planDuration,
  index,
  dispatch,
}) => {
  const plansDurationPrice =
    planDuration === "monthly" ? price.monthly : price.yearly;
  const period = planDuration === "monthly" ? "mo" : "yr";

  return (
    <div>
      <div className="plan" key={text}>
        <input
          type="radio"
          name="plan"
          id={text}
          value={text}
          checked={checked}
          onChange={() => dispatch(updateSelectedPlans(text))}
        />
        <div className="plan__tile">
          <img src={icon} alt={`${text} icon`} />
          <label htmlFor={text}>
            <h4>{text}</h4>
            <p>
              ${plansDurationPrice}/{period}
            </p>
            {planDuration === "yearly" && (
              <p className="gift__text">
                {planDuration === "yearly" && gift.yearly}
              </p>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlansRadioBtn;
