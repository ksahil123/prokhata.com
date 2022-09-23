import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionRequestCustomerById } from "../Redux/Reducers/customerReducer";
import { selectCustomerById, selectCustomerData } from "../Redux/selector";
import "../Styles/DebtAndCred.scss";
import EachTransaction from "./EachTransaction";
import Transaction from "./Transaction";
function DebtAndCread() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [options, setOption] = useState(0);
  const customerData = useSelector(selectCustomerById);
  // let allCustomerData = useSelector(selectCustomerData);
  // const customerData = allCustomerData.filter(
  //   (eachItem) => eachItem._id === id
  // )[0];
  useEffect(() => {
    dispatch(actionRequestCustomerById({ id }));
  }, []);
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
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={1} />
              <EachTransaction type={2} />
              <EachTransaction type={1} />
              <EachTransaction type={2} />
              <EachTransaction type={1} />
              <EachTransaction type={2} />
              <EachTransaction type={1} />

              {/* <div className="transaction-received">100</div>
              <div className="transaction-given">100</div>
              <div className="transaction-received">100</div>
              <div className="transaction-given">100</div> */}
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
