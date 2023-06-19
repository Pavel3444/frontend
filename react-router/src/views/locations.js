import * as location from '../data/location.json';
import {lazy, useState} from "react";
const Categories = lazy(()=>import('../components/categories'));
export default function Locations(){
    const [list] = useState(location);

    return(<div>
        <Categories
            list={list}
        />
    </div>)
}