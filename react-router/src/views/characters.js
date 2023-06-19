import * as characters from '../data/characters.json';
import {lazy, useState} from "react";
const Categories = lazy(()=>import('../components/categories'));

export default function Characters() {
    const [list] = useState(characters);
    return (<div>
        <Categories list={list}/>
    </div>)
}