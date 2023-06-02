import {useAuth} from "../context/authContext";
import {Navigate, useLocation} from "react-router-dom";

export default function PrivateRoute({ children }){
    const auth = useAuth();
    const location = useLocation();
    if (auth.user === null) {
        return <Navigate to="/auth" state={{from: location.pathname}} replace/>
    }
    return children

}