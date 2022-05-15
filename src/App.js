import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 247.12,
    date: new Date(2020, 1, 12),
  },
  {
    id: "e3",
    title: "Electricity",
    amount: 2141.22,
    date: new Date(2020, 6, 15),
  },
  {
    id: "e4",
    title: "Rent",
    amount: 11000,
    date: new Date(2020, 1, 14),
  },
  
];

function App() {


  
  const [expenses, setExpenses] = useState (DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    
    setExpenses((prevExpense) =>{
      return [expense, ...prevExpense];
    });
  };

  


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/  >
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
