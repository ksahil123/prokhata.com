import "./App.css";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import AddCustomer from "./Components/AddCustomer";
import DebtAndCread from "./Components/DebtAndCread";
import Transaction from "./Components/Transaction";
import ScreenLoader from "./Components/ScreenLoader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import { selectAuthenticationUser } from "./Redux/selector";
import { useEffect } from "react";
import { actionSetLogin } from "./Redux/Reducers/authenticationReducer";

function App() {
  const user = useSelector(selectAuthenticationUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("user"));
    // console.log("userSession", userSession);
    if (userSession) {
      dispatch(actionSetLogin(userSession));
    }
  }, []);
  return (
    <div className="App">
      <ScreenLoader />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/signup" />}
          />
          <Route
            exact
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/debt-cread/:id" element={<DebtAndCread />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
