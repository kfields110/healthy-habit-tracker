import './Leaderboard.css';
import Profiles from '../Profile/Profile';
import React, { useState } from 'react';
import Card from '../UI/Card'
import { useCollection } from '../../hooks/useCollection';



// This is the Leaderboard which will display user data.
//Leaderboard can sort based on what user selects which is shown below
//Requirement 4.0.0
const Leaderboard = () => {

    const [period, setPeriod] = useState('totalPoints');
    //Requirement 4.1.0
    const {error, documents} = useCollection('users')


    const handleClick = (props) => {
        setPeriod(props.target.dataset.id) 
  
    }
    return (
        
        <div >
            <Card className="leader_card">
            <h1 className="leaderboard">Leader Board</h1>
            <h4>Here are the healthiest people!</h4>

            <div className='duration'>
                <button onClick={handleClick} data-id='eatingPoints'>Eating Leaders</button>
                <button onClick={handleClick} data-id='mentalPoints'>Mental Leaders</button>
                <button onClick={handleClick} data-id='exercisePoints'>Exercise Leaders</button>
                <button onClick={handleClick} data-id='totalPoints'>Total Leaders</button>
            </div>
            {/* {documents && documents.map(user => {
                <div key={user.id}>
                    <span>{user.displayName}</span>
                    <span>Total Points: {user.totalPoints}</span>
                </div>
            })} */}
            {/* <LeaderboardUsers/> */}
           {documents  && <Profiles Leaderboard={between(documents.slice(0,9), period)} type={period}></Profiles>}
            </Card>
        </div>
        
    )
}
// Requirement 4.3.0 
//This will sort the data based on what the user selects 
function between(data, period){

    // sort with asending order
    if (period === "totalPoints"){
    return data.sort((a, b) => {
    
        if ( a.totalPoints === b.totalPoints){
            return Math.round(b.totalPoints - a.totalPoints);
        } else{
            return Math.round( b.totalPoints - a.totalPoints);
        }
    
 
    })
    }
    if (period === "mentalPoints"){
        return data.sort((a, b) => {
        
            if ( a.mentalPoints === b.mentalPoints){
                return Math.round(b.mentalPoints - a.mentalPoints);
            } else{
                return Math.round( b.mentalPoints - a.mentalPoints);
            }
        
     
        })
        }
    if (period === "eatingPoints"){
        return data.sort((a, b) => {
        
            if ( a.eatingPoints === b.eatingPoints){
                return Math.round(b.eatingPoints - a.eatingPoints);
            } else{
                return Math.round( b.eatingPoints - a.eatingPoints);
            }
        
        
        })
        }
    if (period === "exercisePoints"){
        return data.sort((a, b) => {
        
            if ( a.exercisePoints === b.exercisePoints){
                return Math.round(b.exercisePoints - a.exercisePoints);
            } else{
                return Math.round( b.exercisePoints - a.exercisePoints);
            }
        
        
        })
        }
}

export default Leaderboard;