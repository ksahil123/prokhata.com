import React from "react";

function Supplier() {
  return (
    <div className="parent-card-customer">
      <div className="cards">
        <div className="card">
          <div className="customer-name">Supplier1(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
        <div className="card">
          <div className="customer-name">Supplier2(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
        <div className="card">
          <div className="customer-name">Supplier3(last transaction) : </div>
          <div className="amount">amount</div>
        </div>
      </div>
    </div>
  );
}

export default Supplier;
