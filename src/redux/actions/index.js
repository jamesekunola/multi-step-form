import * as actions from "../actionTypes";

export const setStepOneInputValue = (userInfo) => {
  return {
    type: actions.SET_STEP_ONE_INPUT_VALUE,
    payload: userInfo,
  };
};

export const prevStep = () => {
  return {
    type: actions.PREV_STEP,
  };
};

export const nextStep = () => {
  return {
    type: actions.NEXT_STEP,
  };
};

export const toggleAndUpdatePlanType = (period) => {
  return {
    type: actions.UPDATE_PERIOD,
    payload: period,
  };
};

export const toggleAddOnsPlans = (id) => {
  return {
    type: actions.UPDATE_ADDONS_PLANS,
    payload: id,
  };
};

export const changePlans = () => {
  return {
    type: actions.CHANGE_PLANS,
  };
};
