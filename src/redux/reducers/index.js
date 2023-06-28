import { stepOneReducer } from "./stepOneReducer";
import { stepTwoReducer } from "./stepTwoReducer";
import { stepThreeReducer } from "./stepThreeReducer";
import { steps } from "./steps";

import { combineReducers } from "redux";

export const allReducer = combineReducers({
  stepOneReducer,
  stepTwoReducer,
  stepThreeReducer,
  steps,
});
