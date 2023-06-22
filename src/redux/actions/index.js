import * as actions from "../actionTypes";

export const setStepOneInputValue = (userInfo) => {
  return {
    type: actions.SET_STEP_ONE_INPUT_VALUE,
    payload: userInfo,
  };
};
