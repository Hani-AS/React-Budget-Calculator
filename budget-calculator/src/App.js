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
  // *********** state values ************
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single charge
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // *********** functionality   ************
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), charge: charge, amount: amount };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: "success", text: "item added" });
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount has to be bigger than zero`,
      });
    }
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget calculator</h1>
      <main className="App">
        <Form
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <List expenses={expenses} />
      </main>
      <h1>
        Total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default App;
