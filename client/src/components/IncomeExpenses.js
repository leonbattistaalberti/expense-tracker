import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Income</h5>
                <p className="card-text">${income} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Expenses</h5>
                <p className="card-text">${expense} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
