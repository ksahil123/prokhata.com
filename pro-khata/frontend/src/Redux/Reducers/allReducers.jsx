import { combineReducers } from "redux";
import workoutReducers from "./workoutReducers";
import authenticationReducer from "./authenticationReducer";
import screenLoaderReducer from "./screenLoaderReducer";
import customerReducer from "./customerReducer";
const allReducers = combineReducers({
  workout: workoutReducers,
  authentication: authenticationReducer,
  screenLoader: screenLoaderReducer,
  customer: customerReducer,
});

export default allReducers;
