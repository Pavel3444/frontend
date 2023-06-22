import {NavLink, useLocation} from "react-router-dom";
import {useCallback, useRef, useState} from "react";
import {UseLoadList} from "../hooks/useLoadList";
export default function Categories(props){
    const {state} =useLocation();
    const shownList =[];

    const [page, setPage] = useState(1);
    const {data, error, loading, hasMore} = UseLoadList( page, props.url);
    const addItems = ()=>{
        if (error) return;
        setPage(prevState => prevState+1);
    };
    const observer =useRef();
    const lastNodeRef = useCallback((node)=>{
        if (loading) return;
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) addItems();
        });

        if (node) observer.current.observe(node);
    },[loading, hasMore])

    data.forEach((o,i)=>{
        let el;
            if (i === data.length-1) {
                 el = <div ref={lastNodeRef} key={`o.id-${Math.random()}`} className="listEl">
                    <NavLink to={`/details/${state}-${o.id}`} state={o}>{o.name}</NavLink>
                </div>;
            }else {
                 el = <div key={`o.id-${Math.random()}`} className="listEl">
                    <NavLink to={`/details/${state}-${o.id}`} state={o}>{o.name}</NavLink>
                </div>;
            }
            shownList.push(el);
    })
    return(
        <div>
        {shownList}
        {loading && <div className="listEl">Loading...</div>}
        {error && <div className="listEl">Has error</div>}
        </div>
    )
}