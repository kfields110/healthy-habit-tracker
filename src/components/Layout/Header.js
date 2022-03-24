import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import HeaderProfileButton from './HeaderProfileButton';
import main_splash from '../../assets/Healthy_Main_Splash.jpg';
import classes from './Header.module.css';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import Button from '../UI/Button';

// This is the header/main navigation of the app. It is rendered around every component to allow for site navigation. It also tracks whether a user is logged in
// and renders the page accordingly. 

const Header = props => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;



    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Healthy Habits Tracker</h1>
            <nav className={classes.nav}>
                <ul>
                   {isLoggedIn && (<li><NavLink to='/main' activeClassName={classes.active}>Main Screen</NavLink></li>)}
                   {isLoggedIn &&( <li><NavLink to='/habit-log' activeClassName={classes.active}>Habit Log</NavLink></li>)}
                   {!isLoggedIn && ( <li><NavLink to='/login' activeClassName={classes.active}>Login</NavLink></li> )} 
                   {isLoggedIn && ( <li><Button>Logout</Button></li> )}  

                </ul>
            </nav>
            <NavLink to='/account' activeClassName={classes.active}><HeaderProfileButton name='Preston Garvey' /></NavLink>
            
        </header>
        <div className={classes['main-image']}>
            <img src={main_splash} alt="Healthy Woman." />
        </div>
    </Fragment>
    )
};

export default Header;