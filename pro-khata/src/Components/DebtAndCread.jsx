import React from "react";
import "../Styles/DebtAndCred.scss";
function DebtAndCread() {
  return (
    <div className="parent-container">
      <div className="parent-card-DebtAndCred">
        <div className="names"><h1>Customer's Name</h1></div>
        <div className="transactions">
            <div className="transaction-received">100</div>
            <div className="transaction-given">100</div>
            <div className="transaction-received">100</div>
            <div className="transaction-given">100</div>
        </div>
        <div className="balance">Balance Advance : Rs 75</div>
        <div className="buttons-panel">
            <button className="button received">Received</button>
            <button className="button given">Given</button>
        </div>
      </div>
    </div>
  );
}

export default DebtAndCread;
