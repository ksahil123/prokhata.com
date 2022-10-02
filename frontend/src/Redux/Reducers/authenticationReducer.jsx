import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionRequestSignup = createAction(
  "authentication/REQUEST_SIGNUP"
);
export const actionSetSignup = createAction("authentication/SET_SIGNUP");
export const actionSetSignupError = createAction(
  "authentication/SET_SIGNUP_ERROR"
);
export const actionRequestLogin = createAction("authentication/REQUEST_LOGIN");
export const actionSetLogin = createAction("authentication/SET_LOGIN");
export const actionSetLoginError = createAction(
  "authentication/SET_LOGIN_ERROR"
);
export const actionRequestLogout = createAction(
  "authentication/REQUEST_LOGOUT"
);
export const actionSetLogout = createAction("authentication/SET_LOGOUT");

const initialState = {
  user: null,
  loginError: null,
  signupError: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetSignup, (state, action) => {
      state.user = action.payload;
      state.signupError = initialState.signupError;
    })
    .addCase(actionSetSignupError, (state, action) => {
      state.user = initialState.user;
      state.signupError = action.payload;
    })
    .addCase(actionSetLogin, (state, action) => {
      state.user = action.payload;
      state.loginError = initialState.loginError;
    })
    .addCase(actionSetLoginError, (state, action) => {
      state.user = initialState.user;
      state.loginError = action.payload;
    })
    .addCase(actionSetLogout, (state, action) => {
      state.user = null;
    });
});

export default reducer;
