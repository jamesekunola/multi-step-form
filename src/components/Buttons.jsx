const Buttons = ({ stepIndex }) => {
  return (
    <div className={`button__container ${stepIndex > 1 && "separate"}`}>
      {stepIndex > 1 && <button className="btn prev-btn">Go back</button>}
      <button className="btn next-btn">
        {stepIndex === 3 ? "confirm" : "next step"}
      </button>
    </div>
  );
};

export default Buttons;
