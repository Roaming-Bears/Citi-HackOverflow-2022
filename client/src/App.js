import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Bankers from "./dashboard/Bankers"
import Login from './login/Login';
import Register from './login/Register';

class App extends Component {

  render() {

    const headerItems = [
      {
        label: "Home",
        href: "/home"
      },
      {
        label: "Invest",
        href: "/invest"
      },
      {
        label: "Community",
        href: "/community"
      },
      {
        label: "Dashboard",
        href: "/dashboard"
      },
    ];

    return (
      <div>
        <Header headerItems={headerItems} />
        <div style={{marginTop: "100px"}} />
        <Routes>
          <Route exact path="dashboard" element={<Bankers />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Routes>
      </div>
    );
  }
}

export default App;
