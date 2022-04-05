import Signup from "../components/Profile/Signup";
import Card from "../components/UI/Card";
import './Signup_screen.css'

const SignupScreen = () =>

// This is a simple pointer to the LoginScreen page to use in the Navlink on the main App.js router

{
    return ( 
        <Card className="card">
        <Signup/>
        </Card>
    )
    
}

export default SignupScreen;