import {NavLink, Route, Routes, useLocation} from "react-router-dom";
export default function Categories(props){
    const {state} =useLocation();
    const shownList =[];
        for (let o in props.list) {
            const el = <div key={`o.id-${Math.random()}`} className="listEl">
                <NavLink to={`/details/${state}-${props.list[o].id}`} state={props.list[o]}>{props.list[o].name}</NavLink></div>;
            shownList.push(el);
        }
    return(<div>
        {shownList}
    </div>)
}