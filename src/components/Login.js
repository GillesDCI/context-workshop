import { useState, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext";

export default function Login(){
    //deconstruct what we need from our context 
    const { signInUser, isAuthenticated } = useContext(AuthContext);

    const[inputUsername, setInputUsername] = useState("");

    return(
        <>
           {isAuthenticated ? 
           <button onClick={() => signInUser(false, inputUsername)} >logout</button> 
           :
           ( <><input type="text" onChange={(e) => setInputUsername(e.target.value)} />
          <button onClick={() => signInUser(true, inputUsername)} >Login</button></>)}
        
        </>
    )
}