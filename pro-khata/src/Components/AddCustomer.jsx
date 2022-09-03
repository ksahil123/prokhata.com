import React from "react";
import "../Styles/AddCustomer.scss";

function AddCustomer() {
  return (
    <div className="parent-container">
      <div className="add-customer-parent-card">
        <div className="right-container">
          <h1 className="right-heading">Add Customers</h1>
          <input
            className="input-field username"
            type="text"
            placeholder="Name"
          ></input>
          <input
            className="input-field mobile"
            type="number"
            placeholder="Mobile Number"
          ></input>
          <button className='button sign-up'>Confirm</button>
        </div>
        <div className="left-container">
          <div className="calculator-container"></div>
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
