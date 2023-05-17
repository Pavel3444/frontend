import characters from '../data/characters.json';
import {NavLink} from "react-router-dom";
export default function Characters() {
  return (
        <div className="row">
            {characters.map((el) => (
                <div key={`o.id-${el.id}`} className="col-12 col-md-6 col-lg-4 px-3 py-4">
                    <NavLink to={`/details/characters-${el.id}`} state={el}>{el.name}</NavLink>
                </div>
            ))}
        </div>
  )
}
