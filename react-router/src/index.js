import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg)=>{
        console.log('%cService worker has been registered.', 'color: blue; font-size: larger; font-weight: bold');
        console.log(reg)
    })
    .catch((err)=>{
        console.log('%cService worker has not registered.', 'color: red; font-size: larger; font-weight: bold');
        console.log(err);
    });
}

const App = lazy(()=>import('./App'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
             <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
