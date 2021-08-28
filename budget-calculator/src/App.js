import React, { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Alert } from "./components/Alert";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 1500,
  },
  {
    id: uuidv4(),
    charge: "car payment",
    amount: 400,
  },
  {
    id: uuidv4(),
    charge: "creditcard bill",
    amount: 1200,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert />
      <h1>Budget calculator</h1>
      <main className="App">
        <Form />
        <List expenses={expenses} />
      </main>
      <h1>
        Total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default App;
