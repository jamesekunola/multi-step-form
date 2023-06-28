import * as actions from "../actionTypes";

export const steps = (state = 1, action) => {
  switch (action.type) {
    case actions.NEXT_STEP:
      return state + 1;

    case actions.PREV_STEP:
      return state - 1;

    case actions.CHANGE_PLANS:
      console.log("change btn clicked");
      return 2;

    default:
      return state;
  }
};
