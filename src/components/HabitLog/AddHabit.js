import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AddHabit.module.css";

import ErrorModal from "../UI/ErrorModal";
import { projectFirestore } from "../../firebase/config";
import { Redirect, useParams } from "react-router-dom";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";

// This is a resuable component the allows users to add habits. It accepts parameters of unique habit types that can than be
// rendered on the app.
const AddHabit = ({ uid }) => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState();
  const [habit, setHabit] = useState(null);
  const { addDocument, response } = useFirestore("user-submitted-habit");
  const { id } = useParams();
  const {updateDocument, docResponse} = useFirestore('users')
  const {user} = useAuthContext()
  const {doc_error, document} = useDocument('users', user.uid)
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    projectFirestore
      .collection("habits")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setHabit(doc.data());
        } else {
          setError({
            title: "Could not find habit",
            message: "Error occured, could not find habit.",
          });
        }
      });
  }, [id]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (+amount < 1) {
      setError({
        title: "Invalid Amount",
        message: "Please enter a valid Amount (non empty and non negative)",
      });
      return;
    }

    {!error && addDocument({
      uid,
      habit,
      amount,
    });
    if (habit.Type === 'exercise'){
      let total = Number(document['exercisePoints']) + Number(amount);
    
      await updateDocument(user.uid,
        {exercisePoints: total.toString()
        }
      )
    }
    if (habit.Type === 'mental'){
      let total = Number(document['mentalPoints']) + Number(amount);
    
      await updateDocument(user.uid,
        {mentalPoints: total.toString()
        }
      )
    }
    if (habit.Type === 'eating'){
      let total = Number(document['eatingPoints']) + Number(amount);
    
      await updateDocument(user.uid,
        {eatingPoints: total.toString()
        }
      )
    }

   
    let totalPoints = Number(document['totalPoints'])+ Number(amount);
    await updateDocument(user.uid, {totalPoints: totalPoints.toString()})

    // setHabit("");
    setAmount("");}
    
    if(!error){
    setRedirect(true)
    }
  
  };

  useEffect(() => {
    if (response.success) {
      
      setAmount(null);
    }
  }, [response.success]);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      { redirect ? (<Redirect push to="/habit-log"/>) : null }
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {habit && (
        <Card className={classes.input}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="habit">Habit: {habit.Title} </label>
            <p>{habit.Description}</p>

            <label htmlFor="Amount">Amount</label>
            <input
              id="amount"
              type="number"
              onChange={(event) => setAmount(event.target.value)}
              value={amount}
            />
            <button type="submit" onClick={handleSubmit}>
              Add Habit
            </button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddHabit;
