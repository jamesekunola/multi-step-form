import * as actions from "../actionTypes";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

export const stepOneReducer = (state = initialState, action) => {
  if (action.type === actions.SET_STEP_ONE_INPUT_VALUE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};
