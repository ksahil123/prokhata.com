import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionRequestCustomerData = createAction("customer/REQUEST_DATA");
export const actionSetCustomerData = createAction("customer/SET_DATA");
export const actionCustomerDataError = createAction("customer/DATA_ERROR");

export const actionRequestCustomerById = createAction("customer/REQUEST_BY_ID");
export const actionSetCustomerById = createAction("customer/SET_BY_ID");
export const actionCustomerByIdError = createAction("customer/BY_ID_ERROR");

export const actionRequestSaveCustomerData = createAction(
  "customer/REQUEST_SAVE_DATA"
);
export const actionSetSuccessSaveCustomerData = createAction(
  "customer/SET_SUCCESS_SAVE_DATA"
);
export const actionSetErrorSaveCustomerData = createAction(
  "customer/SET_ERROR_SAVE_DATA"
);

export const actionRequestDeleteCustomerData = createAction(
  "customer/REQUEST_DELETE_DATA"
);
export const actionSetSuccessDeleteCustomerData = createAction(
  "customer/SET_SUCCESS_DELETE_DATA"
);
export const actionSetErrorDeleteCustomerData = createAction(
  "customer/SET_ERROR_DELETE_DATA"
);

export const actionRequestUpdateCustomerData = createAction(
  "customer/REQUEST_UPDATE_DATA"
);
export const actionSetSuccessUpdateCustomerData = createAction(
  "customer/SET_SUCCESS_UPDATE_DATA"
);
export const actionSetErrorUpdateCustomerData = createAction(
  "customer/SET_ERROR_UPDATE_DATA"
);

export const actionResetCustomerData = createAction("customer/RESET_DATA");

const initialState = {
  customerData: [],
  errorCustomerData: {},
  customerById: {},
  errorCustomerById: {},
  requestSaveCustomerDataSuccess: {},
  requestSaveCustomerDataError: {},
  requestDeleteCustomerDataSuccess: {},
  requestDeleteCustomerDataError: {},
  requestUpdateCustomerDataSuccess: {},
  requestUpdateCustomerDataError: {},
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetCustomerData, (state, action) => {
      state.customerData = action.payload;
      state.errorCustomerData = initialState.errorCustomerData;
    })
    .addCase(actionCustomerDataError, (state, action) => {
      state.customerData = initialState.customerData;
      state.errorCustomerData = action.payload;
    })

    .addCase(actionSetCustomerById, (state, action) => {
      state.customerById = action.payload;
      state.errorCustomerById = initialState.errorCustomerById;
    })
    .addCase(actionCustomerByIdError, (state, action) => {
      state.customerById = initialState.customerById;
      state.errorCustomerById = action.payload;
    })

    .addCase(actionSetSuccessSaveCustomerData, (state, action) => {
      state.requestSaveCustomerDataSuccess = action.payload;
      state.requestSaveCustomerDataError =
        initialState.requestSaveCustomerDataError;
    })
    .addCase(actionSetErrorSaveCustomerData, (state, action) => {
      console.log("hi", action.payload);
      state.requestSaveCustomerDataSuccess =
        initialState.requestSaveCustomerDataSuccess;
      state.requestSaveCustomerDataError = action.payload;
    })

    .addCase(actionSetSuccessDeleteCustomerData, (state, action) => {
      state.requestDeleteCustomerDataSuccess = action.payload;
      state.requestDeleteCustomerDataError =
        initialState.requestDeleteCustomerDataError;
    })
    .addCase(actionSetErrorDeleteCustomerData, (state, action) => {
      state.requestDeleteCustomerDataSuccess =
        initialState.requestDeleteCustomerDataSuccess;
      state.requestDeleteCustomerDataError = action.payload;
    })

    .addCase(actionSetSuccessUpdateCustomerData, (state, action) => {
      state.requestUpdateCustomerDataSuccess = action.payload;
      state.requestUpdateCustomerDataError =
        initialState.requestUpdateCustomerDataError;
    })
    .addCase(actionSetErrorUpdateCustomerData, (state, action) => {
      state.requestUpdateCustomerDataSuccess =
        initialState.requestUpdateCustomerDataSuccess;
      state.requestUpdateCustomerDataError = action.payload;
    })

    // Reset all states
    .addCase(actionResetCustomerData, () => initialState);
});
export default reducer;
