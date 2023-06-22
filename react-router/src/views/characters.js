import {lazy} from "react";
const Categories = lazy(()=>import('../components/categories'));

export default function Characters() {

     return (
        <div>
            <Categories
             url="https://rickandmortyapi.com/api/character"
            />
        </div>
    )
}