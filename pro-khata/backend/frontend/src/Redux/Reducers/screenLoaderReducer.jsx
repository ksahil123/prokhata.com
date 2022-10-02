import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionSetShowScreenLoader = createAction("screenLoader/SET_SHOW");
export const actionSetHideScreenLoader = createAction("screenLoader/SET_HIDE");

const initialState = {
  value: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetShowScreenLoader, (state) => {
      state.value = true;
    })
    .addCase(actionSetHideScreenLoader, (state) => {
      state.value = false;
    });
});

export default reducer;
