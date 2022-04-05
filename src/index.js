import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import NotFound from './pages/404'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js'
import Layout from './pages/layout.js'
import Login from './pages/signin'
import Dashboard from './pages/dashboard.js'
import CreateUser from './pages/createUser';
import Registration from './pages/register';


export default function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
  }
  

ReactDOM.render(
  <App />, document.getElementById('root')
);


