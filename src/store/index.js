import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  language: "zh-CN",
  stats: { scale: 0, base: 0, revenue: 0, talents: 0 },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "app/updateStats":
      return { ...state, stats: { ...state.stats, ...action.payload } };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
