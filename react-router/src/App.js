import './App.css';
import {Route, Routes, NavLink} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import ErrorBoundary from "./ErrorBoundary.tsx";

const MainPage = lazy(()=>(import('./views/main')));
const DetailsPage = lazy(()=>import('./components/details'));
const ErrorPage = lazy(()=>import('./views/error'));
const Characters = lazy(()=>import('./views/characters'));
const Episode = lazy(()=>import('./views/episode'));
const Locations = lazy(()=>import('./views/locations'));
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/characters"  state={"characters"}>Characters</NavLink>
         <NavLink to="/episode" state={"episode"}>Episode</NavLink>
         <NavLink to="/locations" state={"locations"}>Locations</NavLink>
      </header>
        <div className="content">
            <ErrorBoundary>
                <Suspense fallback={<div className="load_prew"><h1>Loading...</h1></div>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/characters" element={<Characters/>}/>
                        <Route path="/episode" element={<Episode/>}/>
                        <Route path="/locations" element={<Locations/>}/>
                        <Route path="/details/:id" element={<DetailsPage/>}/>
                        <Route path="/*" element={<ErrorPage/>}/>
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </div>
    </div>
  );
}

export default App;
