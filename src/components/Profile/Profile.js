import React from 'react'
import { useCollection } from '../../hooks/useCollection'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.displayName}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.totalPoints}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}