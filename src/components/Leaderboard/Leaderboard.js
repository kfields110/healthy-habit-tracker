import './Leaderboard.css';
import Profiles from '../Profile/Profile';
import { users } from '../Database/database';
import React, { useState } from 'react';
import Card from '../UI/Card'
import { useCollection } from '../../hooks/useCollection';
import LeaderboardUsers from './LeaderboardUsers';


// This is the Leaderboard which will display user data from the past week, month, and all time.
const Leaderboard = () => {

    const [period, setPeriod] = useState(0);
    const {error, documents} = useCollection('users')
    console.log(documents)

    const handleClick = (props) => {
        setPeriod(props.target.dataset.id)
    }
    return (
        
        <div >
            <Card className="card">
            <h1 className="leaderboard">Leader Board</h1>

            <div className='duration'>
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All Time</button>
            </div>
            {/* {documents && documents.map(user => {
                <div key={user.id}>
                    <span>{user.displayName}</span>
                    <span>Total Points: {user.totalPoints}</span>
                </div>
            })} */}
            {/* <LeaderboardUsers/> */}
           {documents && <Profiles Leaderboard={between(documents, period)}></Profiles>}
            </Card>
        </div>
        
    )
}

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    // let filter = data.filter(val => {
    //     let userDate = new Date(val.dt);
    //     if (between === 0) return val;
    //     return previous <= userDate && today >= userDate;
    // })

    // sort with asending order
    return data.sort((a, b) => {
        if ( a.totalPoints === b.totalPoints){
            return b.totalPoints - a.totalPoints;
        } else{
            return b.totalPoints - a.totalPoints;
        }
    })
}

export default Leaderboard;