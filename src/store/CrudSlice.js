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
      state.Crud = state.Crud.map((num) => {
        if (num.id === action.payload.id) {
          num.text = action.payload.text;
        }
        return num;
      });
    },
  },
});

export const { add, remove, edit } = CrudSlice.actions;

export default CrudSlice.reducer;
