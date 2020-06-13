import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  let sign = transaction.amount < 0 ? "-$" : "+$";
  return (
    <li className="list-group-item list-group-item-primary">
      {transaction.text}{" "}
      <span
        className={
          transaction.amount > 0 ? "badge badge-success" : "badge badge-danger"
        }
      >
        {sign} {Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
};

export default Transaction;
