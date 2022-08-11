import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Login from './login/Login';
import Register from './login/Register';
import News from './homepage/News';
import { NewsContextProvider } from "./homepage/NewsContext";
import Dashboard from './dashboard/Dashboard';
import Feed from './community/postsDisplay/Feed';
import Community from './community/Community';
import Invest from './invest/invest';



class App extends Component {

  /* palette */
  // red: #D9261C
  // navy blue: #003B70
  // white: #FCFDFD
  // black: #161616
  // grey: #4E4E4E

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
      {
        label: "Login",
        href: "/login"
      },
      {
        label: "Register",
        href: "/register"
      }
    ];

    return (
        <div>
          <Header headerItems={headerItems} />
          <div style={{marginTop: "100px"}} />
          <Routes>
            <Route exact path="home" element={<NewsContextProvider> <News /> </NewsContextProvider>} />
            <Route exact path="community" element={<Community />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="invest" element = {<Invest />} />
          </Routes>
        </div>
    );
  }
}

export default App;

