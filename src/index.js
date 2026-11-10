import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCustomComponent from './MyCustomComponent';
import MyFunctionalComp from './MyFunctionalComp';
import Parent from './PassingData/Parent';
import Forms from './ReactFormExample/Forms';

// {/* <App color="green" size="11" onClickEvent={ ()=>{
    //   console.log("This is the onClickEvent of App!!!")
    // } }/> */}
    // {/* <MyCustomComponent/> */}
    // {/* <MyFunctionalComp/> */}
    // <div><div/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    // <Parent/>
    <Forms/>
  // </React.StrictMode>
);