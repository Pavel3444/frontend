import {lazy} from "react";
const Categories = lazy(()=>import('../components/categories'));
export default function Locations(){

    return(<div>
        <Categories
           url="https://rickandmortyapi.com/api/location"
        />
    </div>)
}