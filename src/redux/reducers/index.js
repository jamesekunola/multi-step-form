import { stepOneReducer } from "./stepOneReducer";
import { stepTwoReducer } from "./stepTwoReducer";
import { stepThreeReducer } from "./stepThreeReducer";

import { combineReducers } from "redux";
import { steps } from "./steps";

export const allReducer = combineReducers({
  stepOneReducer,
  stepTwoReducer,
  stepThreeReducer,
  steps,
});
