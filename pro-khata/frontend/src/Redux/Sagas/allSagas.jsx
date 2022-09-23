import { all } from "redux-saga/effects";
import authenticationSaga from "./authenticationSaga";
import workoutSaga from "./workoutSaga";
import customerSaga from "./customerSaga";
export default function* allSagas() {
  yield all([authenticationSaga(), workoutSaga(), customerSaga()]);
}
