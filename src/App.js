
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AccountScreen from "./pages/account_screen";
import HabitLog from "./pages/habit_log";
import MainScreen from "./pages/Main_screen";
import Layout from "./components/Layout/Layout";
import LoginScreen from "./pages/login_screen";
import AddHabit from "./components/HabitLog/AddHabit";
import SignupScreen from "./pages/Signup_screen";
import {useAuthContext} from './hooks/useAuthContext'

//This is the main app component which renders everything seen on screen
// The use authcontext wraps the entire project which enables the user to access screens only available if logged in. 
function App() {
  const { authIsReady, user} = useAuthContext();

  return (
    <Layout>
      {authIsReady && (
      <Switch>
        <Route path="/main">
          {!user && <Redirect to="/login"/>}
          {user && <MainScreen />}
        </Route>
        <Route path="/account">
          {user && <AccountScreen />}
          {!user && <Redirect to="/login"/>}
        </Route>
        <Route path="/habit-log">
          {user && <HabitLog />}
          {!user && <Redirect to="/login"/>}
        </Route>
        <Route path="/login">
         {!user && <LoginScreen />}
         {user && <Redirect to="/main"/>}
        </Route>
        <Route path="/signup">
          {!user && <SignupScreen/>}
          {user && <Redirect to="/main"/>}
        </Route>
        <Route path="/:id">
          {user && <AddHabit uid={user.uid}/>}
          {!user && <LoginScreen />}
        </Route>
        <Route path='*'>
          <Redirect to='/main'/>
        </Route>
      </Switch>)}
    </Layout>
  );
}

export default App;
