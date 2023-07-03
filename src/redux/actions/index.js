import * as actions from "../actionTypes";

export const storeStepOneFormData = (userInfo) => {
  return {
    type: actions.SET_STEP_ONE_INPUT_VALUE,
    payload: userInfo,
  };
};

export const updateSelectedPlans = (id) => {
  return {
    type: actions.UPDATE_SELECTED_PLANS,
    payload: id,
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

export const togglePlansDuration = (duration) => {
  return {
    type: actions.TOGGLE_PLANS_DURATION,
    payload: duration,
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
