import * as actions from "../actionTypes";

const initialState = {
  displayedPeriod: "Monthly",
  name: "Arcade",
  price: "9",
  gift: "",
  period: "mo",
};

export const stepTwoReducer = (state = initialState, action) => {
  if (action.type === actions.UPDATE_PERIOD) {
    console.log(action.payload);
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
