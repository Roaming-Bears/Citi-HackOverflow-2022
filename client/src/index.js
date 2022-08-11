import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider';
import Login from './login/Login';
import Register from './login/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="login" element={<Login /> }/>
      <Route exact path="register" element={<Register />} />
      <Route path="*" element={
        <AuthProvider>
          <App />
        </AuthProvider>
      } />
    </Routes>
  </BrowserRouter>
);
