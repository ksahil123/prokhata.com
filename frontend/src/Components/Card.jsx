import React from "react";
import "../Styles/Customer.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useDispatch } from "react-redux";
import { actionRequestDeleteCustomerData } from "../Redux/Reducers/customerReducer";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const { customerName, amount, lastTransaction, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = lastTransaction
    ? formatDistanceToNow(new Date(lastTransaction))
    : null;
  // const [isVisibleDebtAndCread, setVisibleDebtAndCread] = useState(false);
  function handleDelete() {
    dispatch(actionRequestDeleteCustomerData({ id }));
  }
  function handleCick() {
    console.log("hi click");
    navigate(`/debt-cread/${id}`);
  }
  return (
    <div className="card">
      <div className="customer-name" onClick={handleCick}>
        {customerName}
        {date && <>({date})</>}
      </div>
      <div className={amount >= 0 ? "amount advance" : "amount due"}>
        {amount && Math.abs(amount)}
      </div>
      <button className="button delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Card;
