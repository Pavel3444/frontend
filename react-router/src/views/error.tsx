import {NavLink} from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className={'error'}>
            <h2>
                404 not found
            </h2>
            <NavLink to="/">to home</NavLink>
        </div>
    )
}