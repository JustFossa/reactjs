import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Welcome from './pages/greet.js'
import MyForm from './pages/form'
import NotFound from './pages/404'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js'
import Layout from './pages/layout.js'
import Login from './pages/signin'
import Dashboard from './pages/dashboard.js'
import CreateUser from './pages/createUser';



export default function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="form" element={<MyForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="users" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createuser" element={<CreateUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}



ReactDOM.render(
  <App />, document.getElementById('root')
);


