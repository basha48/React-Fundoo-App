import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Login from './Pages/LoginPage/Login.jsx';
import SignUp from '../src/Pages/SignUpPage/SignUp.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< Login/>} />
      <Route path="/SignUp" element={< SignUp/>} />
      {/* <Route path="/SignUp" element={< SignUp/>} /> */}
     

    </Routes>
  </BrowserRouter>
);

reportWebVitals();
