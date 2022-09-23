// Workout
export const selectWorkoutData = (state) => state.workout.workoutData;

// customer
export const selectCustomerData = (state) => state.customer.customerData;
export const selectErrorCustomerData = (state) =>
  state.customer.errorCustomerData;

export const selectCustomerById = (state) => state.customer.customerById;
export const selectErrorCustomerById = (state) =>
  state.customer.errorCustomerById;

export const selectRequestSaveCustomerDataSuccess = (state) =>
  state.customer.requestSaveCustomerDataSuccess;
export const selectRequestSaveCustomerDataError = (state) =>
  state.customer.requestSaveCustomerDataError;

export const selectRequestDeleteCustomerDataSuccess = (state) =>
  state.customer.requestDeleteCustomerDataSuccess;
export const selectRequestDeleteCustomerDataError = (state) =>
  state.customer.requestDeleteCustomerDataError;

export const selectRequestUpdateCustomerDataSuccess = (state) =>
  state.customer.requestUpdateCustomerDataSuccess;
export const selectRequestUpdateCustomerDataError = (state) =>
  state.customer.requestUpdateCustomerDataError;

// Authentication
export const selectAuthenticationUser = (state) => state.authentication.user;
export const selectAuthenticationSignupError = (state) =>
  state.authentication.signupError;

export const selectAuthenticationLoginError = (state) =>
  state.authentication.loginError;

// screenLoader
export const selectScreenLoaderValue = (state) => state.screenLoader.value;
