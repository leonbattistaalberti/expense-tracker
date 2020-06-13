import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const formHandler = () => {
    const newTransaction = {
      // use uuid instead of Math.random
      id: Math.floor(Math.random() * 100000),
      text: text,
      //parseFloat(amount)
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="text">Add Transaction</label>
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Amount"
            className="form-control"
            aria-describedby="emailHelp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
      <button onClick={formHandler} className="btn btn-primary">
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
