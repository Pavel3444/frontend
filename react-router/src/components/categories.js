import {NavLink, Route, Routes, useLocation} from "react-router-dom";

export default function Categories({list}) {
  const {state} = useLocation();
  // const shownList =[];
  //     for (let i in list) {
  //         const el = <div key={`o.id-${Math.random()}`} className="listEl">
  //             <NavLink to={`/details/${state}-${list[i].id}`} state={list[i]}>{list[i].name}</NavLink></div>;
  //         shownList.push(el);
  //     }

  console.log('list:', list)
  return (
    <div>
      {list.map((el) => (
        <div key={`o.id-${el.id}`} className="listEl">
          <img src={el.image || '#'} alt={el.name} title={el.name}/>
          <NavLink to={`/details/${state}-${el.id}`} state={el}>{el.name}</NavLink>
        </div>
      ))}
    </div>
  )
}
