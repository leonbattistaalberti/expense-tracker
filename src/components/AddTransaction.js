import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="text">Add Transaction</label>
          <input
            type="text"
            class="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Amount"
            class="form-control"
            aria-describedby="emailHelp"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
