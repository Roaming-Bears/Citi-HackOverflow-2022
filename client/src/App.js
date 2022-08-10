<<<<<<< HEAD
import animations from './components/questionnaire.js'
=======
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Bankers from "./dashboard/Bankers"
>>>>>>> origin

class App extends Component {

<<<<<<< HEAD
=======
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
      // {
      //   label: "Sign up/Sign in",
      //   href: "/login"
      // },
      {
        label: "Dashboard",
        href: "/dashboard"
      },
    ];

    return (
      <div>
        <Header headerItems={headerItems} />
        <Routes>
          <Route exact path="dashboard" element={<Bankers />} />
        </Routes>
      </div>
    );
  }
>>>>>>> origin
}

export default App;
