import React, {Fragment} from 'react';

import HeaderProfileButton from './HeaderProfileButton';
import main_splash from '../../assets/Healthy_Main_Splash.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Healthy Habits Tracker</h1>
            <HeaderProfileButton />
        </header>
        <div className={classes['main-image']}>
            <img src={main_splash} alt="Healhy Woman." />
        </div>
    </Fragment>
    )
};

export default Header;