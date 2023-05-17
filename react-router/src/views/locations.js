import location from '../data/location.json';
import Categories from "../components/categories";

export default function Locations(){

    return(<div>
        <Categories
            list={location}
        />
    </div>)
}
