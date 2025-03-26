import React from "react";
import ExpenseItem from "./ExpenseItem";

function Table({ expenses, showBudget = true }) {
  //defaulting showBudget to true if no showBudget parameter was received
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {/* These are the table header column names */}
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
