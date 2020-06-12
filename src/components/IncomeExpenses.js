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
    <div classNameName="container">
      <div classNameName="row">
        <div classNameName="col-sm">
          <div>
            <div classNameName="card">
              <div classNameName="card-body">
                <h5 classNameName="card-title">Income</h5>
                <p classNameName="card-text">${income} </p>
              </div>
            </div>
          </div>
        </div>
        <div classNameName="col-sm">
          <div>
            <div classNameName="card">
              <div classNameName="card-body">
                <h5 classNameName="card-title">Expenses</h5>
                <p classNameName="card-text">${expense} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
