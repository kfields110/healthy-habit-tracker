
import Login from "../components/Profile/Login"
import Card from "../components/UI/Card"

const LoginScreen = () =>

// This is a simple pointer to the LoginScreen page to use in the Navlink on the main App.js router

{
    return (
        <Card className="card">
        <Login/>
        <p>No Account? Click the signup button above!</p>
        </Card>
        
    )
}

export default LoginScreen