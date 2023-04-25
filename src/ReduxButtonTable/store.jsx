import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./ButtonTableSlice";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});
