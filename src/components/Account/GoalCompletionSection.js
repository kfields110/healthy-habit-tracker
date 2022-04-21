import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./GoalCompletionSection.css"

const goal1 = 50; //calories burned
const goal2 = 1; //healthy meals
const goal3 = 200; //steps

function GoalCompletionSection(props) {
  return (
    <div>
      <div className="card" >
        <h3>{props.title}</h3>
        <ul className="goal-circle">
          <li style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={goal1}
              maxValue={200}
              text={`${goal1} cal`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
              })}
            />
          </li>
          <li style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={goal2}
              maxValue={3}
              text={`${goal2} meals`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
              })}
            />
          </li>
          <li style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={goal3}
              maxValue={1000}
              text={`${goal3} steps`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "green",
                trailColor: "red",
              })}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GoalCompletionSection;
