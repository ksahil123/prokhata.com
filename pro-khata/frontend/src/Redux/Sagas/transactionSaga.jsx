import {
  actionRequestSaveTransactionData,
  actionRequestTransactionData,
  actionSetErrorSaveTransactionData,
  actionSetSuccessSaveTransactionData,
  actionSetTransactionData,
  actionTransactionDataError,
} from "../Reducers/transactionReducer";
import { all, put, takeLatest, select } from "redux-saga/effects";
import { selectAuthenticationUser } from "../selector";
import {
  actionSetHideScreenLoader,
  actionSetShowScreenLoader,
} from "../Reducers/screenLoaderReducer";
function* workerRequestTransactionData(action) {
  const userData = yield select(selectAuthenticationUser);
  const { customerId } = action.payload;
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch(`/api/transaction/${customerId}`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetTransactionData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionTransactionDataError(error));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* workerSaveTransactionData(action) {
  const userData = yield select(selectAuthenticationUser);
  yield put(actionSetShowScreenLoader());
  try {
    const response = yield fetch("/api/transaction", {
      method: "Post",
      body: JSON.stringify(action.payload),
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
    });
    const json = yield response.json();
    if (response.ok) {
      yield put(actionSetSuccessSaveTransactionData(json));
    } else {
      throw Error(json.error);
    }
  } catch (error) {
    yield put(actionSetErrorSaveTransactionData(error.message));
  } finally {
    yield put(actionSetHideScreenLoader());
  }
}
function* watcherRequestTransactionData() {
  yield takeLatest(
    actionRequestTransactionData.type,
    workerRequestTransactionData
  );
}
function* watcherSaveTransactionData() {
  yield takeLatest(
    actionRequestSaveTransactionData.type,
    workerSaveTransactionData
  );
}
export default function* allSagas() {
  yield all([watcherRequestTransactionData(), watcherSaveTransactionData()]);
}
