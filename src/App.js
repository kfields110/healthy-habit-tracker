import React from "react";
import { Route, Switch } from "react-router-dom";
import AccountScreen from "./pages/account_screen";
import HabitLog from "./pages/habit_log";
import MainScreen from "./pages/Main_screen";
import Layout from "./components/Layout/Layout";
import LoginScreen from "./pages/login_screen";

function App() {
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
      </Switch>
    </Layout>
  );
}

export default App;
