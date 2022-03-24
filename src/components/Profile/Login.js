import {useRef, useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import CreateAccountModal from './CreateAccountModal';
import Button from '../UI/Button';


// Savann's original login Page. I made a new file called AuthLoginForm because I didn't want to mess this up when refactoring. 
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setError] = useState('');
    const [login, setLogin] = useState(null);

    const [newAccount, setNewAccount] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []
    )

    useEffect(() => {
        setError('');
    }, [user,password]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPassword('');
        setLogin(true);
    }

    const handleAccountSubmit = () => {
        setNewAccount(true)
    }

    const AccountHandler = () => {
        setNewAccount(null)
    }

    return(
        <> 
            {login ? (

                    <Redirect to='/main'/>
                    
                ) : (

        <section>
            <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"}
            aria-live="assertive">{errorMessage}</p>
            <div className='login-content'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Login:</h2>
                <label htmlFor='username' className='login-label'>Username: </label>
                <input 
                    className='login-inputs'
                    type='text' 
                    id='username' 
                    ref={userRef} 
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required>
                </input>

                <label htmlFor='password' className='login-label'>Password: </label>
                <input 
                    className='login-inputs'
                    type='password' 
                    id='password' 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required>
                </input>

                <Button type='submit'>Login</Button>

                <p>
                <span className='login-act-btn' type='submit'>
                    Need to create an account?
                    <Button onClick={handleAccountSubmit}>Click Here</Button>
                    {newAccount && <CreateAccountModal title="Create New Account" message="Create a new Account here" onConfirm={AccountHandler} />}
                </span>
            </p>
            </form>
            </div>

            

        </section>
    )}
    </>
    )
}
export default Login;

