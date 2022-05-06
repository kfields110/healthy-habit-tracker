import classes from './UserHabits.module.css';
import Card from '../UI/Card';

//Requirement 5.1.0
//Displays user habits starting with the most recent
export default function UserHabits ({habits}) {

   

    return (
        <Card className={classes.card}>
        <h1>Added Habits</h1>
        <h4>This is your last 10 habits you added.</h4>
        {!habits && <div>Add some habits to fill out this list and start on your journey of health!</div>}
        <ul className={classes.habits}>
            {habits.slice(0,10).map((habit)=>(
                <li key={habit.id}>
                    <p className={classes.name}>Habit: {habit.habit.Title}</p>
                  
                    <p className={classes.name}>Date added: {habit.createdAt.toDate().toString().slice(0,15)}</p>
                 

                    <p className={classes.amount}>{Math.round(habit.amount * habit.habit.Points)} points</p>
                    
                </li>
            ))}
        </ul>
        </Card>
    )
}