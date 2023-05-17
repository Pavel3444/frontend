import episode from '../data/episode.json';
import {NavLink} from "react-router-dom";

export default function Episode() {
  return (
      <div className="row">
          {episode.map((el) => (
              <div key={`o.id-${el.id}`} className="col-12 col-md-6 col-lg-4 px-3 py-4">
                  <NavLink to={`/details/episode-${el.id}`} state={el}>{el.name}</NavLink>
              </div>
          ))}
      </div>
  );
}
