import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  actionRequestLogin,
  actionRequestLogout,
  actionRequestSignup,
  actionSetLogin,
  actionSetLoginError,
  actionSetLogout,
  actionSetSignup,
  actionSetSignupError,
} from "../Reducers/authenticationReducer";
import { actionResetCustomerData } from "../Reducers/customerReducer";
import {
  actionSetShowScreenLoader,
  actionSetHideScreenLoader,
} from "../Reducers/screenLoaderReducer";
import { actionResetWorkoutData } from "../Reducers/workoutReducers";
function* workerAuthenticationSignup(action) {
  //   console.log("HI All I am SAGA", action.payload);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/user/signup", {
      method: "Post",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (response.ok) {
      // save the user to the local storage
      localStorage.setItem("user", JSON.stringify(json));
      yield put(actionSetSignup(json));
    }
    if (!response.ok) {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetSignupError(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* workerAuthenticationLogin(action) {
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/user/login", {
      method: "Post",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (response.ok) {
      // save the user to the local storage
      localStorage.setItem("user", JSON.stringify(json));
      yield put(actionSetLogin(json));
    }
    if (!response.ok) {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetLoginError(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* workerAuthenticationLogout() {
  localStorage.removeItem("user");
  yield put(actionSetLogout());
  yield put(actionResetCustomerData());
}
function* watcherAuthenticationSignup() {
  yield takeLatest(actionRequestSignup.type, workerAuthenticationSignup);
}
function* watcherAuthenticationLogin() {
  yield takeLatest(actionRequestLogin.type, workerAuthenticationLogin);
}
function* watcherAuthenticationLogout() {
  yield takeLatest(actionRequestLogout.type, workerAuthenticationLogout);
}
export default function* allSagas() {
  yield all([
    watcherAuthenticationSignup(),
    watcherAuthenticationLogout(),
    watcherAuthenticationLogin(),
  ]);
}
