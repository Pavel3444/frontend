// @ts-ignore
import * as episode from '../data/episode.json';
import Categories from "../components/categories";
import {useState} from "react";

export default function Episode() {
    const [list] = useState(episode);

    return (<div>
        <Categories list={list}/>
    </div>)
}