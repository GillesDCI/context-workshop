import { createContext, useState } from "react";

//declare the context 
const AuthContext = createContext({}); 

//Provider 
function AuthProvider({children}){
    //two states : isAuthenticated and username
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");


    //if the user is logging in this means isLoggedIn = true
    const signInUser = (isLoggedIn, username) => {
        //set the is authenticated value inside our global state to true
        setIsAuthenticated(isLoggedIn);
        //set the username if loggedIn is true 
        isLoggedIn ? setUsername(username) : setUsername("");
    }


    return (
        <AuthContext.Provider value={{isAuthenticated, signInUser, setUsername, username}} >
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider }