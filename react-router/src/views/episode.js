import {lazy} from "react";
const Categories = lazy(()=>import('../components/categories'));

export default function Episode() {

    return (<div>
        <Categories url="https://rickandmortyapi.com/api/episode"/>
    </div>)
}