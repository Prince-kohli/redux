import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Crud: [],
};

console.log("initialState", initialState);

export const CrudSlice = createSlice({
  name: "crud",
  initialState,

  reducers: {
    add: (state, actions) => {
      const crud = {
        id: nanoid(),
        text: actions.payload,
      };
      state.Crud.push(crud);
    },
    remove: (state, action) => {
      state.Crud = state.Crud.filter((num) => num.id !== action.payload.id);
    },
    edit: (state, action) => {
      const edit = state.Crud.find((num) => num.id === action.payload.id);
    },
  },
});

export const { add, remove, edit } = CrudSlice.actions;

export default CrudSlice.reducer;
