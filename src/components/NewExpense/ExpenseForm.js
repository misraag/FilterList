import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.can();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  
  

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick={props.can} type="button">Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
