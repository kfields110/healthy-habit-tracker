import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Layout/Header'
import Overview from './components/MainScreen/Overview';
import Leaderboard from './components/MainScreen/Leaderboard';
import StreakTracker from './components/MainScreen/StreakTracker';

function App() {
  return (

    <Fragment>
      <Header />
      <Overview />
      <Leaderboard />
      <StreakTracker />
    </Fragment>

    );
}

export default App;
