import { NavLink } from "react-router-dom";
import './HabitList.css';
import Button from "../UI/Button";

export default function HabitList ({habits}) {
    return (
        <div className="habit-list">
            {habits.map(habit => (
                <div key={habit.id} className="card">
                    <h3>{habit.Title}</h3>
                    <p>{habit.Description}</p>
                    <h4>Points for {habit.Points}</h4>
                    <Button>Click here to add!</Button>
                </div>
            ))}
        </div>
    )
}