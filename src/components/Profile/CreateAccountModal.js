import Card from '../UI/Card'
import Button from "../UI/Button";
import classes from "./CreateAccountModal.module.css";

//Pop up to allow for a user to create an account
//Requirement 6.0.0

const CreateAccountModal = (props) => {
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

export default CreateAccountModal;