import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Customer.scss";
function Customer() {
  return (
    <div className="parent-card-customer">
      <div className="cards">
      <Link className="cards" to="/debt-cread">
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
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div> 
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div> 
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div> 
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div> 
        <div className="card">
          <div className="customer-name">Customer1(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
      </Link>        
      </div>
      <Link className="add-customer" to="/add-customer"><button className="button customer">Add Customer</button></Link>
    </div>
  );
}
export default Customer;
