import { stepOneReducer } from "./stepOneReducer";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
  stepOneReducer,
});
