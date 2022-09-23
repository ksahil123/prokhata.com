import React from "react";
import { useSelector } from "react-redux";
import { selectScreenLoaderValue } from "../Redux/selector";
import "../Styles/ScreenLoader.scss";

function ScreenLoader() {
  const isVisible = useSelector(selectScreenLoaderValue);

  if (isVisible) {
    return (
      <div className="inline">
        <div className="spinner"></div>
      </div>
    );
  }
  return null;
}
export default ScreenLoader;
