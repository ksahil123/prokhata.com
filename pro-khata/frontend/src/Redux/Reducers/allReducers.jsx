import { combineReducers } from "redux";
import workoutReducers from "./workoutReducers";
import authenticationReducer from "./authenticationReducer";
import screenLoaderReducer from "./screenLoaderReducer";
const allReducers = combineReducers({
  workout: workoutReducers,
  authentication: authenticationReducer,
  screenLoader: screenLoaderReducer,
});

export default allReducers;
