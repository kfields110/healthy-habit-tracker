import React, {useState} from 'react';


// This component receives and stores the unique user token when the user logs in and is used to access 
// restricted content amongst other things. 

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return( <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>)
}

export default AuthContext;