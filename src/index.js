import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCustomComponent from './MyCustomComponent';
import MyFunctionalComp from './MyFunctionalComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App color="green" size="11" onClickEvent={ ()=>{
      console.log("This is the onClickEvent of App!!!")
    } }/>
    {/* <MyCustomComponent/> */}
    {/* <MyFunctionalComp/> */}
  </React.StrictMode>
);