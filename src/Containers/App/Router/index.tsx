import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from '@views/Home';
import Login from '@views/Login';
import PageNotFound from '@views/PageNotFound';

const Router = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path='/404' element={<PageNotFound />} />
    <Route path='*' element={<Navigate to="/404" replace />} />
  </Routes>
);

export default Router;
