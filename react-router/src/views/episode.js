import * as episode from '../data/episode.json';
import {lazy, useState} from "react";
const Categories = lazy(()=>import('../components/categories'));

export default function Episode() {
    const [list] = useState(episode);

    return (<div>
        <Categories list={list}/>
    </div>)
}