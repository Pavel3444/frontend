// @ts-ignore
import * as location from '../data/location.json';
import Categories from "../components/categories";
import {useState} from "react";

export default function Locations(){
    const [list] = useState(location);

    return(<div>
        <Categories
            list={list}
        />
    </div>)
}