import { useAuthContext } from '../../hooks/useAuthContext';
import classes from './HeaderProfileButton.module.css';
import Avatar from '../Profile/Avatar';

const HeaderProfileButton = props => {
    const{user} = useAuthContext();
// This is the profile button.

    return <button className={classes.button}>
        <span className = {classes.icon}>
        <Avatar src={user.photoURL}>{user.displayName}</Avatar>
        </span>
        <span>{props.name}</span>
    </button>
    
}

export default HeaderProfileButton;