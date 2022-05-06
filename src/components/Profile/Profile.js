import React from 'react'
import './Profile.css'

//This profile component takes in data from the firebase store and displays it based on what type is passed in
//Requirement 4.3.0

export default function profiles({ Leaderboard, type }) {
  return (
        <div id="profile">
            
            {Item(Leaderboard, type)}
            
        </div>
  )
}

function Item(data, type){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.photoURL} alt="" className="image"/>
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.displayName}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>
                            
                            {type=== "totalPoints" && Math.round(value.totalPoints)} 
                            {type=== "mentalPoints" && Math.round(value.mentalPoints)}  
                            {type=== "exercisePoints" && Math.round(value.exercisePoints)}
                            {type=== "eatingPoints" && Math.round(value.eatingPoints)}  
                            </span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}