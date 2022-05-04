import React, { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";
import Overview from "../components/MainScreen/Overview";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import './Main_screen.css';
import GoalCompletionSection from "../components/Account/GoalCompletionSection";
import UserHabits from "../components/MainScreen/UserHabits";
import { useAuthContext } from "../hooks/useAuthContext";

const MainScreen = () => {
  // This is a simple pointer to the main page to use in the Navlink on the main App.js router
  const {user} = useAuthContext();
  const {documents, error} = useCollection('user-submitted-habit',
    ["uid","==",user.uid]
  )
  //Sort in descending order
  {documents &&documents.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : -1)} 
  
  return (
    <Fragment >
     
      <Overview />
      <div >
      <div className="div1">
      <GoalCompletionSection  title="Daily Goals" />
      {error && <p>{error}</p>}
      </div>
      <div className="div2">
      <Leaderboard  />
      </div>
    
      
     
     
      </div>
      <div className="div3">
      
      
      {documents && <UserHabits habits={documents}/>}   
      </div>
    
    </Fragment>
  );
};

export default MainScreen;
