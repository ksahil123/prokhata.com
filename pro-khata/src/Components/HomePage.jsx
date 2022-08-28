import React from "react";
import { useState } from "react";
import Customer from "./Customer";
import Supplier from "./Supplier";
import "../Styles/HomePage.scss";
function HomePage() {
  const [active, setActive] = useState("tab1");
  const handleTab1 = () => {
    setActive("tab1");
  };
  const handleTab2 = () => {
    setActive("tab2");
  };
  return (
    <div className="parent-container">
      <div className="parent-card">
        <h1 className="heading-font">HOME PAGE</h1>
        <ul className="tabs-switch">
          <li
            className={active === "tab1" ? "tabs tab1 active" : "tabs tab1"}
            onClick={handleTab1}
          >
            Customers
          </li>
          <li
            className={active === "tab2" ? "tabs tab2 active" : "tabs tab2"}
            onClick={handleTab2}
          >
            Suppliers
          </li>
        </ul>
        <div className="card">
          {active === "tab1" ? <Customer /> : <Supplier />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
