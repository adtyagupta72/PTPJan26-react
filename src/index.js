import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCustomComponent from './MyCustomComponent';
import MyFunctionalComp from './MyFunctionalComp';
import Parent from './PassingData/Parent';
import Forms from './ReactFormExample/Forms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './RouterExample/Navigation';
import Home from './RouterExample/Home';
import Login from './RouterExample/Login';
import SignUp from './RouterExample/SignUp';

// {/* <App color="green" size="11" onClickEvent={ ()=>{
    //   console.log("This is the onClickEvent of App!!!")
    // } }/> */}
    // {/* <MyCustomComponent/> */}
    // {/* <MyFunctionalComp/> */}
    // <div><div/>
    // <React.StrictMode>
    // <Parent/>
    // <Forms/>
  // </React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
  </BrowserRouter>
);