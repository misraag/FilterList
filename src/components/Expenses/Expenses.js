import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredYear, selectedYear] = useState("2020");

  const filterChangeHandler = (year) => {
    selectedYear(year);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={enteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear}></ExpensesList>
      </Card>
    </div>
  );
}
export default Expenses;
