import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddHabit.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Dropdown from "../UI/DropDown";


// This is a resuable component the allows users to add habits. It accepts parameters of unique habit types that can than be 
// rendered on the app.
const AddHabit = (props) => {
  const [enteredHabit, setHabit] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [error, setError] = useState();
  const [selected, setSelected] = useState("Choose One");

  const AddHabitHandler = (event) => {
    event.preventDefault();
    if (enteredHabit.trim().length === 0 || enteredAmount.trim() === 0) {
      setError({
        title: "Invalid Habit",
        message: "Please enter a valid Habit (non empty and non negative)",
      });
      return;
    }
    if (+enteredAmount < 1) {
      setError({
        title: "Invalid Amount",
        message: "Please enter a valid Amount (non empty and non negative)",
      });
      return;
    }
    setHabit("");
    setAmount("");
  };

  const addHabitHandler = (event) => {
    setHabit(event.target.value);
  };

  const addAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
      <div>
          {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={AddHabitHandler}>
        <label htmlFor="habit">Habit Type</label>
        {/* <input
          id="habit"
          type="text"
          value={enteredHabit}
          onChange={addHabitHandler}
        /> */}
        <Dropdown options={props.options} selected={selected} setSelected={setSelected} />
        <label htmlFor="Amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={enteredAmount}
          onChange={addAmountHandler}
        />
        <Button type="submit">Add Habit</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddHabit;
