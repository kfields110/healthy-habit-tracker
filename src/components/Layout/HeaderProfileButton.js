import ProfileIcon from '../Profile/ProfileIcon';
import classes from './HeaderProfileButton.module.css';

const HeaderProfileButton = props => {

// This is the profile button.

    return <button className={classes.button}>
        <span className = {classes.icon}>
        <ProfileIcon />
        </span>
        <span>{props.name}</span>
    </button>
    
}

export default HeaderProfileButton;