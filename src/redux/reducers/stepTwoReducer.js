import * as actions from "../actionTypes";
// icons
import arcadeIcon from "../../icons/icon-arcade.svg";
import advanceIcon from "../../icons/icon-advanced.svg";
import proIcon from "../../icons/icon-pro.svg";

const initialState = [
  {
    icon: arcadeIcon,
    text: "Arcade",
    price: { monthly: 9, yearly: 90 },
    gift: { monthly: "", yearly: "2 month free" },
    checked: true,
    planDuration: "monthly",
  },
  {
    icon: advanceIcon,
    text: "Advance",
    price: { monthly: 12, yearly: 120 },
    gift: { monthly: "", yearly: "2 month free" },
    checked: false,
    planDuration: "monthly",
  },
  {
    icon: proIcon,
    text: " Pro",
    price: { monthly: 15, yearly: 150 },
    gift: { monthly: "", yearly: "2 month free" },
    checked: false,
    planDuration: "monthly",
  },
];

export const stepTwoReducer = (state = initialState, action) => {
  if (action.type === actions.TOGGLE_PLANS_DURATION) {
    return [
      ...state.map((plan) => ({ ...plan, planDuration: action.payload })),
    ];
  }

  if (action.type === actions.UPDATE_SELECTED_PLANS) {
    return [
      ...state.map((plan) => {
        return plan.text === action.payload
          ? { ...plan, checked: true }
          : { ...plan, checked: false };
      }),
    ];
  }
  return state;
};
