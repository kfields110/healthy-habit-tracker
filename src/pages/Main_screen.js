import React, { Fragment } from "react";
import Overview from "../components/MainScreen/Overview";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import './Main_screen.css';
import GoalCompletionSection from "../components/MainScreen/GoalCompletionSection";

const MainScreen = () => {
  // This is a simple pointer to the main page to use in the Navlink on the main App.js router

  return (
    <Fragment id="content">
     
      <Overview />
      <div classname='div1'>
      <GoalCompletionSection />
      </div>
      <div className='div2'>
      <Leaderboard />
      </div>
    
    </Fragment>
  );
};

export default MainScreen;
