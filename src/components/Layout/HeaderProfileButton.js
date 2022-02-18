import ProfileIcon from '../Profile/ProfileIcon';
import classes from './HeaderProfileButton.module.css';

const HeaderProfileButton = props => {
    return <button className={classes.button}>
        <span className = {classes.icon}>
        <ProfileIcon />
        </span>
        <span>Name Place Holder</span>
    </button>
    
}

export default HeaderProfileButton;