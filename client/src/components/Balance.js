import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //let sign = total < 0 ? "-" : "+";
  return (
    <React.Fragment>
      <h4 className="display-4">Balance</h4>
      <p className="display-5">{numberWithCommas(total)}</p>
    </React.Fragment>
  );
};

export default Balance;
