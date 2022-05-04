import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import HeaderProfileButton from "./HeaderProfileButton";
import main_splash from "../../assets/Healthy_Main_Splash.jpg";
import classes from "./Header.module.css";
import { useLogout } from "../../hooks/useLogout";
import Button from "../UI/Button";
import { useAuthContext } from "../../hooks/useAuthContext";

// This is the header/main navigation of the app. It is rendered around every component to allow for site navigation. It also tracks whether a user is logged in with 
// the 'useAuthContext' hook and renders the page accordingly.

// Requirement 3.0.0
//Requirements 3.0.1 -> 3.0.5 in the return block

const Header = (props) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Healthy Habits Tracker</h1>
        <nav className={classes.nav}>
          <ul>
            {user && (
              <li>
                <NavLink to="/main" activeClassName={classes.active}>
                  Main Screen
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/habit-log" activeClassName={classes.active}>
                  Habit Log
                </NavLink>
              </li>
            )}
              {!user && (
                <li>
                  <NavLink to="/signup" activeClassName={classes.active}>
                    Signup
                  </NavLink>
                </li>
              )}
            <>
              {!user && (
                <li>
                  <NavLink to="/login" activeClassName={classes.active}>
                    Login
                  </NavLink>
                </li>
              )}
            
            </>
            <li>
              {user && <Button className={classes.nav} onClick={logout}>Logout</Button>}
            </li>
            {user && <li>Hello, {user.displayName}!</li>}
          </ul>
        </nav>

        {user && (
          <NavLink to="/account" activeClassName={classes.active}>
            <HeaderProfileButton name={user.displayName} />
          </NavLink>
        )}
      </header>
      <div className={classes["main-image"]}>
        <img src={main_splash} alt="Healthy Woman." />
      </div>
    </Fragment>
  );
};

export default Header;
