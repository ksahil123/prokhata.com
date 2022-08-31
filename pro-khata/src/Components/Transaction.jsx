import React from "react";
import "../Styles/Transaction.scss";
function Transaction() {
  return (
    <div className="parent-container">
      <div className="parent-card-transaction">
        <div className="right-container">
          <div className="names">
            <h1>Customer's Name</h1>
          </div>
          <div className="transaction-amount">
            <input type="number" className="input-amount"></input>
            <p>100</p>
          </div>
          <input type="date" className="date"></input>
          <div className="transaction-notes">
            <input
              type="text"
              placeholder="Add Note (Optional)"
              className="notes"
            ></input>
            <button className="button-ok">ok</button>
          </div>
        </div>
        <div className="left-container">
          <div className="calculator-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
