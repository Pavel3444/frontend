import {useAuth} from "../context/authContext";
import {useNavigate} from "react-router-dom";

export default function AuthStatus(){
    const auth = useAuth()
    const navigate = useNavigate()

    const signOut = ()=>{
        auth.signOut(()=>{
            navigate('/')
        })
    }
    if (auth.user===null){
        return(
            <p>You are not logged in</p>
        )
    }
    return (
        <button onClick={signOut}>
            Sign out
        </button>
    )
}