import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "../components/Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="container">
      <h5 className="display-5">Transactions</h5>
      <ul className="list-group">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    </div>
  );
};

export default TransactionList;

// <li className="list-group-item list-group-item-secondary">
//   A simple secondary list group item
// </li>
// <li className="list-group-item list-group-item-success">
//   A simple success list group item
// </li>
// <li className="list-group-item list-group-item-danger">
//   A simple danger list group item
// </li>
// <li className="list-group-item list-group-item-warning">
//   A simple warning list group item
// </li>
// <li className="list-group-item list-group-item-info">
//   A simple info list group item
// </li>
// <li className="list-group-item list-group-item-light">
//   A simple light list group item
// </li>
// <li className="list-group-item list-group-item-dark">
//   A simple dark list group item
// </li>
