import * as characters from '../data/characters.json';
import Categories from "../components/categories";
import {useState} from "react";

export default function Characters() {
    const [list] = useState(characters);
    console.log('vneshne ', list)
    return (<div>
        <Categories list={list}/>
    </div>)
}