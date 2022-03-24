import classes from './Card.module.css';

const Card = props => {
  // A card that can be reused to contain components in consistant styles across the app.

  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;