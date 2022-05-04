import { AuthContext } from "../components/store/AuthContext";
import { useContext } from "react";

//This is the hook that gets user authentication token. With this token we can securly access information associated
// with the user that is currently logged in.
// Requirement 8.1.0

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be inside.')
    }

    return context;
}