import {useState} from "react";
import {useAuth} from "../context/authContext";
import {useNavigate} from "react-router-dom";

export default function AuthPage(){
    const [login, setLogin] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();
    const onInput = (e)=>{
        setLogin(e.target.value);
    }

    const registration = () =>{
        auth.signIn(  login, ()=>{
            navigate('/')
        })
    }
    if (auth.user) {
        return (
            <div style={{ textAlign : "center"}}>
            <h2>You are logged</h2>
            </div>
        )
    }
        return (
              <div style={{ textAlign : "center"}}>
                  <form action="" onSubmit={registration}>
                      <input
                          type="text"
                          value={login}
                          onChange={onInput}
                      />
                      <br/>
                      <br/>
                      <button className="btn" disabled={login.length<2}>Log In</button>
                  </form>

              </div>
        )

}