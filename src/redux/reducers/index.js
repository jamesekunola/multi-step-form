import { stepOneReducer } from "./stepOneReducer";
import { combineReducers } from "redux";
import { steps } from "./steps";

export const allReducer = combineReducers({
  stepOneReducer,
  steps,
});
