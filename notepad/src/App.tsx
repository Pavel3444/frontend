import React from 'react';
import {AuthProvider} from "./context/authContext";
import Auth from "./pages/auth";

function App() {
  return (
      <AuthProvider>
    <div className="App">
    <Auth/>
    </div>
      </AuthProvider>
  );
}

export default App;
