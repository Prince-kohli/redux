import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/CounterSlice";
import crudReducer from "../CrudSlice/CrudSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer,
  },
});
