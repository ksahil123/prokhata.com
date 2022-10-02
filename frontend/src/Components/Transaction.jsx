import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionRequestUpdateCustomerData,
  actionSetErrorUpdateCustomerData,
} from "../Redux/Reducers/customerReducer";
import "../Styles/Transaction.scss";
import { isEmpty } from "lodash-es";
import { selectRequestUpdateCustomerDataError } from "../Redux/selector";
import { actionRequestSaveTransactionData } from "../Redux/Reducers/transactionReducer";
function Transaction(props) {
  const dispatch = useDispatch();
  const updateCustomerDataError = useSelector(
    selectRequestUpdateCustomerDataError
  );
  const { customerName, amount: amountP, type, id, setOption } = props;
  const date = new Date();
  const amount =
    amountP === 0 || isNaN(amountP) || amountP === undefined || amountP === null
      ? 0
      : amountP;
  const [transactionValue, setTransactionValue] = useState(0);
  const [data, setData] = useState({
    amount: amount,
    lastTransaction: date,
  });
  useEffect(() => {
    if (!isEmpty(updateCustomerDataError)) {
      alert(updateCustomerDataError.error);
    }
    return () => {
      dispatch(actionSetErrorUpdateCustomerData());
    };
  }, [updateCustomerDataError]);
  function handleChangeAmount(e) {
    console.log("evasa", e);
    setTransactionValue(e.target.value);
    if (type === 1) {
      setData({
        ...data,
        amount: parseInt(amount) + parseInt(e.target.value),
      });
    }
    if (type === 2) {
      setData({
        ...data,
        amount: parseInt(amount) - parseInt(e.target.value),
      });
    }
  }
  function handleClickOk() {
    console.log("data", data);
    const transactionCode = type === 2 ? true : false;
    if (transactionValue > 0 && !isNaN(data.amount)) {
      dispatch(actionRequestUpdateCustomerData({ id, body: data }));
      dispatch(
        actionRequestSaveTransactionData({
          customerId: id,
          transactionAmount: transactionValue,
          transactionCode,
        })
      );
      setOption(0);
    } else {
      alert("please Enter valid values in the field");
    }
  }
  function handleClickBack() {
    setOption(0);
  }
  return (
    <div className="parent-container">
      <div className="parent-card-transaction">
        <div className="right-container">
          <div className="names">
            <button className="button edit" onClick={handleClickBack}>
              Back
            </button>
            <h1>{customerName}</h1>
          </div>
          <div className="transaction-amount">
            <input
              type="number"
              className="input-amount"
              value={transactionValue}
              onChange={(e) => handleChangeAmount(e)}
            ></input>
            <p className={data.amount >= 0 ? "advance" : "due"}>
              {!isNaN(data.amount) && Math.abs(data.amount)}
            </p>
          </div>
          <input type="date" className="date"></input>
          <div className="transaction-notes">
            <input
              type="text"
              placeholder="Add Note (Optional)"
              className="notes"
            ></input>
            <button className="button-ok" onClick={handleClickOk}>
              {type === 1 && <span className="">Receiving</span>}
              {type === 2 && <span className="">Giving</span>}
            </button>
          </div>
        </div>
        <div className="left-container">
          {type === 1 && <span>Received</span>}
          {type === 2 && <span>Given</span>}
          <div className="calculator-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
