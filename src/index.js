import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service_worker.js").then(registration=>{
    console.log("SW Registered!");
  }).catch(error=>{
    console.log("SW Registration Failed");
  });
}else{
console.log("Not supported");
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
