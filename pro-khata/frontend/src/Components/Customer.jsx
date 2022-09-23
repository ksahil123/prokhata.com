import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  actionRequestCustomerData,
  actionResetCustomerData,
} from "../Redux/Reducers/customerReducer";
import { selectCustomerData } from "../Redux/selector";
import "../Styles/Customer.scss";
import Card from "./Card";
// import DebtAndCread from "./DebtAndCread";
function Customer() {
  const dispatch = useDispatch();
  const customerData = useSelector(selectCustomerData);
  useEffect(() => {
    dispatch(actionRequestCustomerData());
      // return () => {
      //   dispatch(actionResetCustomerData());
      // };
  }, []);
  return (
    <div className="parent-card-customer">
      <div className="cards">
        {customerData &&
          customerData.map((eachItem) => (
              <Card
                customerName={eachItem.name}
                id={eachItem._id}
                lastTransaction={eachItem.lastTransaction}
                amount={eachItem.amount}
              />
          ))}
      </div>
      <Link className="add-customer" to="/add-customer">
        <button className="button customer">Add Customer</button>
      </Link>
    </div>
  );
}
export default Customer;
