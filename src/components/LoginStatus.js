import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function LoginStatus(){
    const {isAuthenticated, username} = useContext(AuthContext);

    return(
        <>
          <p>The current login status is:  {isAuthenticated ? <b>Signed In</b> : <b>Signed Out</b> }  </p>

          {isAuthenticated && <p>Welcome: {username}</p>}
        </>
    )
}