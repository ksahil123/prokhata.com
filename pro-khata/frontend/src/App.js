import "./App.css";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import AddCustomer from "./Components/AddCustomer";
import DebtAndCread from "./Components/DebtAndCread";
import Transaction from "./Components/Transaction";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/debt-cread" element={<DebtAndCread />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
