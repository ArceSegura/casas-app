import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PageNotFound from '../../Views/PageNotFound';
import Home from '../../Views/Home';
import Login from '../../Views/Login';

const Router = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path='/404' element={<PageNotFound />} />
    <Route path='*' element={<Navigate to="/404" replace />} />
  </Routes>
);

export default Router;
