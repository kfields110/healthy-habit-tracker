import classes from './UserHabits.module.css';
import Card from '../UI/Card';

export default function UserHabits ({habits}) {
    return (
        <Card>
        <header>Added Habits</header>
        <ul className={classes.habits}>
            {habits.map((habit)=>(
                <li key={habit.id} className>
                    <p className={classes.name}>{habit.habit.Title}</p>
                    <p className={classes.amount}>{habit.amount}</p>
                    
                </li>
            ))}
        </ul>
        </Card>
    )
}