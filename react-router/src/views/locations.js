import location from '../data/location.json';
import {NavLink} from "react-router-dom";

export default function Locations(){
    return(
        <div className="row">
        {location.map((el) => (
            <div key={`o.id-${el.id}`} className="col-12 col-md-6 col-lg-4 px-3 py-4">
                <NavLink to={`/details/location-${el.id}`} state={el}>{el.name}</NavLink>
            </div>
        ))}
    </div>)
}
