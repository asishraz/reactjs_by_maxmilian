import "./App.css";
// import React from "react";

// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// import ExpenseFilter from "./components/NewExpense/ExpenseFilter";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );

  //! this would have been the code, if JSX was not there
  // React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Lets get started"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
};

export default App;
