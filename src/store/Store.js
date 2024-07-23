import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/CounterSlice";
import CrudReducer from "../store/CrudSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: CrudReducer,
  },
});
