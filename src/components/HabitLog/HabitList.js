import './HabitList.css';
import Button from "../UI/Button";
import HabitModal from '../UI/HabitModal';
import { useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { NavLink } from 'react-router-dom';


//This component is responsible for dynamically rendering each habit in the Firestore database
//Requirement 2.2.0

export default function HabitList ({habits}) {
    
    const [enteredHabit, setHabit] = useState(null);
    const [habitTitle, setHabitTitle] = useState("");
    const [habitDescription, setHabitDesciption] = useState("");
    const [habitPoints, setHabitPoints] = useState("");

    
    const handleClick = (id, type) => {
        projectFirestore.collection(type).doc(id)
    }

    const habitHandler = () => {
        setHabit(null)
    }

    return (
        <div>
        
        <div className="habit-list">
            {habits.map(habit => (
                
                <div key={habit.id} className="habitcard">
                    <h3>{habit.Title}</h3>
                    <p>{habit.Description}</p>
                    <NavLink to={`/${habit.id}`}>Click here to add!</NavLink>
                </div>
            ))}
            {enteredHabit && <HabitModal title={habitTitle} message={habitDescription} onConfirm={habitHandler}/>  }
        </div>
        </div>
    )
}