import classes from './UserHabits.module.css';
import Card from '../UI/Card';


export default function UserHabits ({habits}) {

   

    return (
        <Card className={classes.card}>
        <h1>Added Habits</h1>
        {!habits && <div>Add some habits to fill out this list and start on your journey of health!</div>}
        <ul className={classes.habits}>
            {habits.slice(0,10).map((habit)=>(
                <li key={habit.id}>
                    <p className={classes.name}>Habit: {habit.habit.Title}</p>
                  
                    <p className={classes.name}>Date added: {habit.createdAt.toDate().toString().slice(0,15)}</p>
                 

                    <p className={classes.amount}>{habit.amount} points</p>
                    
                </li>
            ))}
        </ul>
        </Card>
    )
}