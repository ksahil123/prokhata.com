import React from "react";

function EachTransaction(props) {
  const { type } = props;
  return (
    <>
      {type === 1 && (
        <div className="transaction-card">
          <div className="transaction-received">100</div>
        </div>
      )}
      {type === 2 && (
        <div className="transaction-card">
          <div className="transaction-given">100</div>
        </div>
      )}
    </>
  );
}

export default EachTransaction;
