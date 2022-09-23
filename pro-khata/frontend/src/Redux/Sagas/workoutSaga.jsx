import { all, put, takeLatest, select } from "redux-saga/effects";
import {
  actionSetHideScreenLoader,
  actionSetShowScreenLoader,
} from "../Reducers/screenLoaderReducer";
import {
  actionRequestWorkoutData,
  actionSetWorkoutData,
  actionWorkoutDataError,
} from "../Reducers/workoutReducers";
import { selectAuthenticationUser } from "../selector";

function* workerWorkoutData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/pro-khata", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetWorkoutData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionWorkoutDataError(error));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* watcherWorkoutData() {
  yield takeLatest(actionRequestWorkoutData.type, workerWorkoutData);
}
export default function* allSagas() {
  yield all([watcherWorkoutData()]);
}
