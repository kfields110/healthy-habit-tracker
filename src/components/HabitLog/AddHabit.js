import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AddHabit.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { projectFirestore } from "../../firebase/config";
import { useParams } from "react-router-dom";
import {useFirestore} from '../../hooks/useFirestore'


// This is a resuable component the allows users to add habits. It accepts parameters of unique habit types that can than be 
// rendered on the app.
const AddHabit = ({uid}) => {
  
  const [amount, setAmount] = useState("");
  const [error, setError] = useState();
  const [habit, setHabit] = useState(null);
  const { addDocument, response} = useFirestore('user-submitted-habit')
  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    projectFirestore.collection('habits').doc(id).get().then((doc) => {
      if (doc.exists) {
        setHabit(doc.data())
      } else {
        setError({
          title: "Could not find habit",
          message: "Error occured, could not find habit."
        })
      }
    })
  }, [id])


  const AddHabitHandler = (event) => {
    event.preventDefault();
    // if (enteredHabit.trim().length === 0 || enteredAmount.trim() === 0) {
    //   setError({
    //     title: "Invalid Habit",
    //     message: "Please enter a valid Habit (non empty and non negative)",
    //   });
    //   return;
    // }
    if (+amount < 1) {
      setError({
        title: "Invalid Amount",
        message: "Please enter a valid Amount (non empty and non negative)",
      });
      return;
    }
    // setHabit("");
    setAmount("");
  };

  const addHabitHandler = (event) => {
    setHabit(event.target.value);
  };

  const addAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    addDocument({
      uid,
      habit,
      amount,
    })
  }

  const errorHandler = () => {
      setError(null);
  }

  return (
      <div>
          {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    {habit && <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="habit">Habit: {habit.Title} </label>
        <p>{habit.Description}</p>
        
        <label htmlFor="Amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Add Habit</button>
      </form>
    </Card>}
    </div>
  );
};

export default AddHabit;
