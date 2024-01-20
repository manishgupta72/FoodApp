import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Home from './screens/Home';

import { Navbar } from "./component/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from "./screens/Login.js";
function App() {
  return (
    <>
   <Router>
    <Navbar/>
   <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route exact path='/login' element={<Login/>} />
   </Routes>
   </Router>
    </>
  );
}

export default App;
