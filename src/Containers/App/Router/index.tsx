import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../../Views/Home';
import Login from '../../Views/Login';

const Router = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
  </Routes>
);

export default Router;
