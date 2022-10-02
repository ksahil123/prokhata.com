import { all, put, takeLatest, select } from "redux-saga/effects";
import {
  actionCustomerByIdError,
  actionCustomerDataError,
  actionRequestCustomerById,
  actionRequestCustomerData,
  actionRequestDeleteCustomerData,
  actionRequestSaveCustomerData,
  actionRequestUpdateCustomerData,
  actionSetCustomerById,
  actionSetCustomerData,
  actionSetErrorDeleteCustomerData,
  actionSetErrorSaveCustomerData,
  actionSetErrorUpdateCustomerData,
  actionSetSuccessDeleteCustomerData,
  actionSetSuccessSaveCustomerData,
  actionSetSuccessUpdateCustomerData,
} from "../Reducers/customerReducer";
import {
  actionSetHideScreenLoader,
  actionSetShowScreenLoader,
} from "../Reducers/screenLoaderReducer";
import { selectAuthenticationUser } from "../selector";

function* workerCustomerData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/customer", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetCustomerData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionCustomerDataError(error));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* workerCustomerById(action){
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch(`/api/customer/${action.payload.id}`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetCustomerById(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionCustomerByIdError(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* workerSaveCustomerData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/customer", {
      method: "Post",
      body: JSON.stringify(action.payload),
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetSuccessSaveCustomerData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetErrorSaveCustomerData(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}

function* workerDeleteCustomerData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch(`/api/customer/${action.payload.id}`, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetSuccessDeleteCustomerData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetErrorDeleteCustomerData(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}

function* workerUpdateCustomerData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch(`/api/customer/${action.payload.id}`, {
      method: "PATCH",
      body: JSON.stringify(action.payload.body),
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetSuccessUpdateCustomerData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetErrorUpdateCustomerData(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}

function* watcherCustomerData() {
  yield takeLatest(actionRequestCustomerData.type, workerCustomerData);
}
function* watcherCustomerById() {
  yield takeLatest(actionRequestCustomerById.type, workerCustomerById);
}
function* watcherSaveCustomerData() {
  yield takeLatest(actionRequestSaveCustomerData.type, workerSaveCustomerData);
}
function* watcherDeleteCustomerData() {
  yield takeLatest(
    actionRequestDeleteCustomerData.type,
    workerDeleteCustomerData
  );
}
function* watcherUpdateCustomerData() {
  yield takeLatest(
    actionRequestUpdateCustomerData.type,
    workerUpdateCustomerData
  );
}
export default function* allSagas() {
  yield all([
    watcherCustomerData(),
    watcherSaveCustomerData(),
    watcherDeleteCustomerData(),
    watcherUpdateCustomerData(),
    watcherCustomerById(),
  ]);
}
