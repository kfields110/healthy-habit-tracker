import { useState, useRef, useContext } from "react";
import { AuthContext } from "../store/AuthContext";

import classes from "./AuthForm.module.css";



// This is the main functionality of connecting to the Firebase API to allow for the creating and login process of users.

const AuthLoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);
  

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(authCtx);
    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjyTcq3Y7uenkFWKypKn8rUDGJeQKqyUI';
    } else {
      url =  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjyTcq3Y7uenkFWKypKn8rUDGJeQKqyUI";
    }
      fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(res => {
        setIsLoading(false);
        if (res.ok){
            return res.json();
        } else {
         return res.json().then(data=> {
           const errorMessage = data.error.message;
           
           throw new Error(errorMessage);
          });
        }
      }).then(data => {
        authCtx.login(data.idToken);
      }).catch(err => {
        alert(err.message);
      });
    
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
         {isLoading && <p>Sending Request....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthLoginForm;
