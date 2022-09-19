import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionRequestWorkoutData = createAction("workout/REQUEST_DATA");
export const actionSetWorkoutData = createAction("workout/SET_DATA");
export const actionResetWorkoutData = createAction("workout/RESET_DATA");

const initialState = {
  workoutData: [],
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetWorkoutData, (state, action) => {
      state.workoutData = action.payload;
    })
    .addCase(actionResetWorkoutData, (state, action) => {
      state.workoutData = initialState.workoutData;
    });
});
export default reducer;
