import React, { Fragment } from "react";
import Overview from "../components/MainScreen/Overview";
import Leaderboard from "../components/Leaderboard/Leaderboard";
import StreakTracker from "../components/MainScreen/StreakTracker";

const MainScreen = () => {
  // This is a simple pointer to the main page to use in the Navlink on the main App.js router

  return (
    <Fragment>
     
      <Overview />
      
      <Leaderboard />
     
      <StreakTracker />
     
    </Fragment>
  );
};

export default MainScreen;
