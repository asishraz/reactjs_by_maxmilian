import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">&#x20B9;{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
//! for india rupee symbol use , "&#x20B9;"

//! we can't use our custom define componets as a wrapper around other content
//! having content b/w opening and closing tag doesn't work simply
//! for html elements, it works not for custom define components
//! to make these components as reusable wrapper components around other content
//! we have to use one special in-built prop, which every component receives
//! {props.children}
//! Children is a reserved name and the value of this special children prop
//! will always be the content between the opening and closing tags of your custom component.
//!
