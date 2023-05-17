import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import HomePage from "./views/home";
import DetailsPage from "./components/details";
import ErrorPage from "./views/error";
import Characters from "./views/characters";
import Episode from "./views/episode";
import Locations from "./views/locations";

function App() {
  return (
    <div className="App">
      <header className="App-header pb-5">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/characters"  state={"characters"}>Characters</NavLink>
         <NavLink to="/episode" state={"episode"}>Episode</NavLink>
         <NavLink to="/locations" state={"locations"}>Locations</NavLink>
      </header>
       <div className="container">
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/characters" element={<Characters/>}/>
                  <Route path="/episode" element={<Episode/>}/>
                  <Route path="/locations" element={<Locations/>}/>
                  <Route path="/details/:id" element={<DetailsPage/>}/>
                  <Route path="/*" element={<ErrorPage/>}/>
              </Routes>
       </div>
    </div>
  );
}

export default App;
