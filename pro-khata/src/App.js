import "./App.css";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import DebtAndCread from "./Components/DebtAndCread";
import Transaction from "./Components/Transaction";
import AddCustomer from "./Components/AddCustomer";
function App() {
  return (
    <div className="App">
      <SignupPage />
      <LoginPage />
      <HomePage/>
      <AddCustomer />
      <DebtAndCread/>
      <Transaction/>
    </div>
  );
}

export default App;
