import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Bankers from "./dashboard/Bankers"
import ProfilePage from './profile/ProfilePage';

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
      // {
      //   label: "Sign up/Sign in",
      //   href: "/login"
      // },
      {
        label: "Dashboard",
        href: "/dashboard"
      },
      {
        label: "Profile",
        href: "/profile"
      }
    ];

    return (
      <div>
        <Header headerItems={headerItems} />
        <Routes>
          <Route exact path="dashboard" element={<Bankers />} />
          <Route exact path="profile" element={<ProfilePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
