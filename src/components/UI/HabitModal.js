import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const HabitModal = (props) => {
  // A resuable error pop up screen that can allow users to know if something went wrong. 

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default HabitModal;
