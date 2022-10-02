import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash-es";
import { actionRequestCustomerById } from "../Redux/Reducers/customerReducer";
import { actionRequestTransactionData } from "../Redux/Reducers/transactionReducer";
import {
  selectCustomerById,
  selectRequestSaveCustomerDataSuccess,
  selectRequestUpdateCustomerDataSuccess,
  selectTransactionData,
} from "../Redux/selector";
import "../Styles/DebtAndCred.scss";
import EachTransaction from "./EachTransaction";
import Transaction from "./Transaction";
function DebtAndCread() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [options, setOption] = useState(0);
  const customerData = useSelector(selectCustomerById);
  const transactionData = useSelector(selectTransactionData);
  const saveTransactionDataSuccess = useSelector(
    selectRequestSaveCustomerDataSuccess
  );
  const updateCustomerDataSuccess = useSelector(
    selectRequestUpdateCustomerDataSuccess
  );
  useEffect(() => {
    if (
      options === 0 ||
      (!isEmpty(updateCustomerDataSuccess) &&
        !isEmpty(saveTransactionDataSuccess))
    ) {
      dispatch(actionRequestTransactionData({ customerId: id }));
      dispatch(actionRequestCustomerById({ id }));
    }
  }, [options, updateCustomerDataSuccess, saveTransactionDataSuccess]);
  console.log("transactionData", transactionData);
  function handleClick(e) {
    if (e.target.name === "received") {
      setOption(1);
    }
    if (e.target.name === "given") {
      setOption(2);
    }
  }
  return (
    <>
      {options === 0 && customerData && (
        <div className="parent-container">
          <div className="parent-card-DebtAndCred">
            <div className="names">
              <h1>{customerData.name}</h1>
            </div>
            <div className="transactions">
              {transactionData &&
                transactionData.map((eachItem) => (
                  <EachTransaction
                    transactionAmount={eachItem.transactionAmount}
                    type={eachItem.transactionCode ? 2 : 1}
                  />
                ))}
            </div>
            <div className="balance">
              {customerData.amount >= 0 ? (
                <span>Balance Advance : </span>
              ) : (
                <span>Balance Due : </span>
              )}
              <span>
                {customerData.amount && Math.abs(customerData.amount)}
              </span>
            </div>
            <div className="buttons-panel">
              {/* <Link to="/transaction"> */}
              <button
                className="button received"
                onClick={(e) => handleClick(e)}
                name="received"
              >
                Received
              </button>
              {/* </Link> */}
              {/* <Link to="/transaction"> */}
              <button
                className="button given"
                onClick={(e) => handleClick(e)}
                name="given"
              >
                Given
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      )}
      {options !== 0 && customerData && (
        <Transaction
          type={options}
          amount={
            customerData.amount === undefined || null ? 0 : customerData.amount
          }
          id={customerData._id}
          customerName={customerData.name}
          setOption={setOption}
        />
      )}
      {customerData && <span>Please go to Home Page</span>}
    </>
  );
}

export default DebtAndCread;
