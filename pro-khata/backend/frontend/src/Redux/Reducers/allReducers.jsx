import { combineReducers } from "redux";
import workoutReducers from "./workoutReducers";
import authenticationReducer from "./authenticationReducer";
import screenLoaderReducer from "./screenLoaderReducer";
import customerReducer from "./customerReducer";
import transactionReducer from "./transactionReducer";
const allReducers = combineReducers({
  workout: workoutReducers,
  authentication: authenticationReducer,
  screenLoader: screenLoaderReducer,
  customer: customerReducer,
  transaction: transactionReducer,
});

export default allReducers;
