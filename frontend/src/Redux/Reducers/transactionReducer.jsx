import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionRequestTransactionData = createAction(
  "transaction/REQUEST_DATA"
);
export const actionSetTransactionData = createAction("transaction/SET_DATA");
export const actionTransactionDataError = createAction(
  "transaction/DATA_ERROR"
);

export const actionRequestSaveTransactionData = createAction(
  "transaction/REQUEST_SAVE_DATA"
);
export const actionSetSuccessSaveTransactionData = createAction(
  "transaction/SET_SUCCESS_SAVE_DATA"
);
export const actionSetErrorSaveTransactionData = createAction(
  "transaction/SET_ERROR_SAVE_DATA"
);

export const actionResetTransactionData = createAction("transaction/REST_DATA");

const initialState = {
  transactionData: [],
  errorTransactionData: {},
  requestSaveTransactionDataSuccess: {},
  requestSaveTransactionDataError: {},

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetTransactionData, (state, action) => {
      state.transactionData = action.payload;
      state.errorTransactionData = initialState.errorTransactionData;
    })
    .addCase(actionTransactionDataError, (state, action) => {
      state.transactionData = initialState.transactionData;
      state.errorTransactionData = action.payload;
    })

    .addCase(actionSetSuccessSaveTransactionData, (state, action) => {
      state.requestSaveTransactionDataSuccess = action.payload;
      state.requestSaveTransactionDataError =
        initialState.requestSaveTransactionDataError;
    })
    .addCase(actionSetErrorSaveTransactionData, (state, action) => {
      console.log("hi", action.payload);
      state.requestSaveTransactionDataSuccess =
        initialState.requestSaveTransactionDataSuccess;
      state.requestSaveTransactionDataError = action.payload;
    })

    // Reset all states
    .addCase(actionResetTransactionData, () => initialState);
});

export default reducer;
