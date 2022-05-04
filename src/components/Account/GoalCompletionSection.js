import React, {useState, useEffect} from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./GoalCompletionSection.css";
import { projectFirestore } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import Card from "../UI/Card";

//This component displays the amount of points each user earned toward their daily goals


function GoalCompletionSection(props) {
  const {user} = useAuthContext()
  const [document, setDocuments] = useState(null);
const startOfDay = new Date();
startOfDay.setUTCHours(0,0,0,0)

useEffect(() => {const unsubscribe = projectFirestore.collection('user-submitted-habit').where('uid', '==', user.uid).where('createdAt', '>=', startOfDay).onSnapshot((snapshot) => {
  let results = []
  snapshot.docs.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
  })

  setDocuments(results)
 
}, (error) => {
  console.log(error)
 
})
return () => unsubscribe()
}, [])

let dailyEating = 0; //calories burned
let dailyMental = 0; //healthy meals
let dailyExercise = 0; //steps

//Setting the suggested daily amount to achieve. Numbers are pretty high. 
const maxEating = 75;
const maxMental = 50;
const maxExercise = 100;

{document && document.forEach(doc => {
    

    if(doc.habit['Type']==='exercise'){
      dailyExercise += Math.round((doc.amount * Number(doc.habit['Points'])));
    }

    if(doc.habit['Type']==='eating'){
      dailyEating += Math.round((doc.amount * Number(doc.habit['Points'])));
    }

    if(doc.habit['Type']==='mental'){
      dailyMental += Math.round((doc.amount * Number(doc.habit['Points'])));
    }
})
}

  return (
      <div className="card" >
        <h1>{props.title}</h1>
        <h4>This shows your progress toward your daily goals! Keep adding healthy habits!</h4>
        <ul className="goal-circle">
          <li style={{ width: 250, height: 200}}>
            <CircularProgressbar
              value={dailyEating}
              maxValue={maxEating}
              text={`${dailyEating}/${maxEating} Eating `}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
                textSize: '9px'
              })}
            />
          </li>
          <li style={{ width: 250, height: 200 }}>
            <CircularProgressbar
              value={dailyMental}
              maxValue={50}
              text={`${dailyMental}/${maxMental} Mental `}
             
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
                textSize: '9px'
              })}
            />
          </li>
          <li style={{ width: 250, height: 200 }}>
            <CircularProgressbar
              value={dailyExercise}
              maxValue={100}
              text={`${dailyExercise}/${maxExercise} Exercise`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
                textSize: "9px"
              })}
            />
          </li>
        </ul>
      </div>
    
  );
}

export default GoalCompletionSection;
