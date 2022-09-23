import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionRequestSaveCustomerData } from "../Redux/Reducers/customerReducer";
import "../Styles/AddCustomer.scss";

function AddCustomer() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    mobileNumber: 0,
  });
  function handleChange(e, fieldName) {
    setData({
      ...data,
      [fieldName]: e.target.value,
    });
  }
  function handleClick() {
    dispatch(actionRequestSaveCustomerData(data));
  }
  return (
    <div className="parent-container">
      <div className="add-customer-parent-card">
        <div className="right-container">
          <h1 className="right-heading">Add Customers</h1>
          <input
            className="input-field username"
            type="text"
            placeholder="name"
            value={data.name}
            onChange={(e) => handleChange(e, "name")}
          ></input>
          <input
            className="input-field mobile"
            type="number"
            placeholder="mobileNumber"
            value={data.mobileNumber}
            onChange={(e) => handleChange(e, "mobileNumber")}
          ></input>
          {/* <Link to="/"> */}
          <button className="button sign-up" onClick={handleClick}>
            Confirm
          </button>
          {/* </Link> */}
        </div>
        <div className="left-container">
          <div className="calculator-container"></div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
