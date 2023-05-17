import {Navigate, useLocation} from "react-router-dom";

export default function DetailsPage(){
    const {state} = useLocation();
    if (!state) return (<Navigate to="/error"/>)
    return(<div className="details">
        <p>Name: {state.name}</p>
        <p>Created: {state.created}</p>

        {state.image ? <img src={state.image} alt=""/> : null}

        {state.status ?<p>Status: {state.status}</p>: null}
        {state.species ? <p>Species: {state.species}</p>: null}
        {state.type ? <p>Type: {state.type}</p>: null}
        {state.gender ? <p>Gender: {state.gender}</p>: null}

        {state.air_date ? <p>Air date: {state.air_date}</p> : null}
        {state.episode ? <p>Episode: {state.episode}</p> : null}

        {state.dimension ? <p>dimension: {state.dimension}</p> : null}
        { state.episode ? <p>Episode: {state.episode}</p> : null}



    </div>)
}