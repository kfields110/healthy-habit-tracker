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


  return (
    <Fragment className="container" >
     
      <Overview />
      <div >
    
      <GoalCompletionSection title="Daily Goals" />
      {error && <p>{error}</p>}
      {documents && <UserHabits habits={documents}/>}  
      <Leaderboard classname='div1' />
      
      
      </div>
      
      
    
    </Fragment>
  );
};

export default MainScreen;
