// Workout
export const selectWorkoutData = (state) => state.workout.workoutData;
// Authentication
export const selectAuthenticationUser = (state) => state.authentication.user;
export const selectAuthenticationSignupError = (state) => state.authentication.signupError;

export const selectAuthenticationLoginError = (state) => state.authentication.loginError;

// screenLoader
export const selectScreenLoaderValue = (state) => state.screenLoader.value;
