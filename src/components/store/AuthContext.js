import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../../firebase/config'

//This component creates an AuthContext which will enable the program to know whether
//A user is looged in or out and this provides an auth token, which is kept on firebase
// and is used to access user specific content throughout the rest of the website
// If you look at App.js, you can see the authcontext wrapping of the entire website.

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return {...state, user:action.payload, authIsReady: true}
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({type: 'AUTH_IS_READY', payload: user})
      unsub()
    })
  }, [])
 
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}