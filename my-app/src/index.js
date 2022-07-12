import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App2 from './App2/App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
//console.log(params.userId);
//http://localhost:3001/user?userId=1
root.render(
  <React.StrictMode>
    <App2 userId={params.userId}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
