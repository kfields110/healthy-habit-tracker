import './Leaderboard.css';
import Profiles from '../Profile/Profile';
import { users } from '../Database/database';
import React, { useState } from 'react';
import Card from '../UI/Card'


// This is the Leaderboard which will display user data from the past week, month, and all time.
const Leaderboard = () => {

    const [period, setPeriod] = useState(0);

    const handleClick = (props) => {
        setPeriod(props.target.dataset.id)
    }
    return (
        
        <div className="board">
            <Card >
            <h1 className="leaderboard">Leader Board</h1>

            <div className='duration'>
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All Time</button>
            </div>

            <Profiles Leaderboard={between(users, period)}></Profiles>
            </Card>
        </div>
        
    )
}

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between === 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })
}

export default Leaderboard;