import {NavLink} from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className={'errorPage'}>
            <h2>
                404 not found
            </h2>
            <NavLink to="/">to home</NavLink>
        </div>
    )
}