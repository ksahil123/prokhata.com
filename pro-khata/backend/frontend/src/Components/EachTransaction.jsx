import React from "react";

function EachTransaction(props) {
  const { type, transactionAmount } = props;
  return (
    <>
      {type === 1 && (
        <div className="transaction-card">
          <div className="transaction-received">{transactionAmount}</div>
        </div>
      )}
      {type === 2 && (
        <div className="transaction-card">
          <div className="transaction-given">{transactionAmount}</div>
        </div>
      )}
    </>
  );
}

export default EachTransaction;
