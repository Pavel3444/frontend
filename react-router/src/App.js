import './App.css';
import {Route, Routes, NavLink, useNavigate} from "react-router-dom";
import MainPage from "./views/main";
import DetailsPage from "./components/details";
import ErrorPage from "./views/error";
import Characters from "./views/characters";
import Episode from "./views/episode";
import Locations from "./views/locations";
import AuthPage from "./views/auth";
import {AuthProvider} from "./context/authContext";
import PrivateRoute from "./components/privateRoute";
import AuthStatus from "./components/authStatus";

function App() {

  return (
      <AuthProvider>
    <div className="App">
      <header className="App-header">
          <AuthStatus/>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/characters"  state={"characters"}>Characters</NavLink>
            <NavLink to="/episode" state={"episode"}>Episode</NavLink>
            <NavLink to="/locations" state={"locations"}>Locations</NavLink>
            <NavLink to="/auth" state={"locations"}>Login</NavLink>
        </div>
      </header>
       <div className="content">
           <Routes>
               <Route path="/" element={<PrivateRoute><MainPage/></PrivateRoute>} />
               <Route path="/auth" element={<AuthPage/>} />

               <Route path="/characters" element={<PrivateRoute><Characters/></PrivateRoute>}/>
               <Route path="/episode" element={<PrivateRoute><Episode/></PrivateRoute>}/>
               <Route path="/locations" element={<PrivateRoute><Locations/></PrivateRoute>}/>
               <Route path="/details/:id" element={<PrivateRoute><DetailsPage/></PrivateRoute>}/>
               <Route path="/*" element={<ErrorPage/>}/>
           </Routes>
       </div>
    </div>
      </AuthProvider>
  );
}

export default App;
