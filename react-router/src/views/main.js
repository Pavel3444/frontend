import {useAuth} from "../context/authContext";

export default function MainPage(){
    const auth = useAuth()

    return(<div className="Home">

        <h1>Приветствие, {auth.user}!</h1>
    </div>)
}