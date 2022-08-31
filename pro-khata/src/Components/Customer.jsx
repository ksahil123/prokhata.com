import React from "react";
import "../Styles/Customer.scss";
function Customer() {
  return (
    <div className="parent-card-customer">
      <div className="cards">
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
        <div className="card">
          <div className="customer-name">Customer2(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div>        
      </div>
      <button className="button customer">Add Customer</button>
    </div>
  );
}
export default Customer;
