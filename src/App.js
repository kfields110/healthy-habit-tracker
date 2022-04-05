import { useContext } from "react";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AccountScreen from "./pages/account_screen";
import HabitLog from "./pages/habit_log";
import MainScreen from "./pages/Main_screen";
import Layout from "./components/Layout/Layout";
import LoginScreen from "./pages/login_screen";
import { AuthContext } from "./components/store/AuthContext";
import SignupScreen from "./pages/Signup_screen";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/main">
          <MainScreen />
        </Route>
        <Route path="/account">
          <AccountScreen />
        </Route>
        <Route path="/habit-log">
          <HabitLog />
        </Route>
        <Route path="/login">
         <LoginScreen />
        </Route>
        <Route path="/signup">
          <SignupScreen/>
        </Route>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
