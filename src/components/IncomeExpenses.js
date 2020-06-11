import React from "react";

const IncomeExpenses = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Income</h5>
                <p class="card-text">$0.00 </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Expenses</h5>
                <p class="card-text">$0.00 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
