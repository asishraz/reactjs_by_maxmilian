import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmountEntered(e.target.value);
    // console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDateEntered(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: amountEntered,
      date: new Date(dateEntered),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setAmountEntered("");
    setDateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={amountEntered}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="01-01-2022"
            onChange={dateChangeHandler}
            value={dateEntered}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
