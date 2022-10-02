import allReducers from "./Reducers/allReducers";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import allSagas from "./Sagas/allSagas";
const sagamiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: allReducers,
  middleware: [sagamiddleware],
});

// Run Saga middleware
sagamiddleware.run(allSagas);
export default store;
