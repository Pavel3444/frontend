// @ts-ignore
import * as characters from '../data/characters.json';
import Categories from "../components/categories";
import {useState} from "react";

export default function Characters() {
    const [list] = useState(characters);
    return (<div>
        <Categories list={list}/>
    </div>)
}