
import React from "react";
import { useDocument } from "../../hooks/useDocument";
import { useAuthContext } from "../../hooks/useAuthContext";


//User points section that displays points earned by user
//Requirement 1.3.0

function UserPoints() {

    const {user} = useAuthContext()
    const {error, document} = useDocument('users', user.uid)

    if(error){
        return <div>error</div>
    
      }
      if(!document) {
        return <div>Loading...</div>
      }

  const pointsInfo = [
    {
      id: "a1",
      label: "Eating Points Accrued: ",
      content: document.eatingPoints,
    },
    {
      id: "a2",
      label: "Mental Points Accrued: ",
      content: document.mentalPoints,
    },
    {
      id: "a3",
      label: "Exercise Points Accrued: ",
      content: document.exercisePoints,
    },
    {
      id: "a4",
      label: "Total Points Accrued: ",
      content: document.totalPoints  
    }
  ];


  

  return (
    <div>
      <div className="card">
        <h3>Points Info</h3>
        <div className="line-break">
          <ul>
            
            {document && pointsInfo.map((info) => {
              return (
                <li key={info.id}>
                  {info.label} {info.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserPoints;
