import * as actions from "../actionTypes";

const initialState = [
  {
    id: 0,
    type: "Online service",
    price: { monthly: 1, yearly: 10 },
    desc: "Access to multiplayer games",
    checked: true,
  },
  {
    id: 1,
    type: "Larger storage",
    price: { monthly: 2, yearly: 20 },
    desc: "Extra 1TB of cloud save",
    checked: true,
  },
  {
    id: 2,
    type: "Customizable profile",
    price: { monthly: 2, yearly: 20 },
    desc: "custom theme on your profile",
    checked: false,
  },
];

export const stepThreeReducer = (state = initialState, action) => {
  if (action.type === actions.UPDATE_ADDONS_PLANS) {
    return [
      ...state.map((plan) => {
        return plan.id === action.payload
          ? { ...plan, checked: !plan.checked }
          : plan;
      }),
    ];
  }
  return state;
};
