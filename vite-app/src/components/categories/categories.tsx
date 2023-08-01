import {NavLink, useLocation} from "react-router-dom";
import { IList} from "../../utils/interfaces.ts";
export default function Categories(props: { list: IList }){
    console.log('in ',props.list)
    const {state} =useLocation();
    const shownList =[];
        for (const o in props.list.default) {
            const el = <div key={`o.id-${Math.random()}`} className="listEl">
                <NavLink to={`/details/${state}-${props.list.default[o].id}`} state={props.list.default[o]}>{props.list.default[o].name}</NavLink></div>;
            shownList.push(el);
        }
    return(<div>
        {shownList}
    </div>)
}