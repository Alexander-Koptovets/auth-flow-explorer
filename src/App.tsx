import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import User from "./pages/User";

import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
