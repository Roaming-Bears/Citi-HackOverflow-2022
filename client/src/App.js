import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './header/Header'
import Login from './login/Login';
import Register from './login/Register';
import ProfilePage from './profile/ProfilePage';
import Explore from './explore/Explore';
import News from './homepage/News';
import { NewsContextProvider } from "./homepage/NewsContext";
import Dashboard from './dashboard/Dashboard';
import Community from './community/Community';
import Plans from './plans/Plans';
import AuthContext from './auth/AuthContext';
import AuthService from './auth/AuthService';
import Logout from './login/Logout';
import Invest from './invest/invest';



class App extends Component {

  /* palette */
  // red: #D9261C
  // navy blue: #003B70
  // white: #FCFDFD
  // black: #161616
  // grey: #4E4E4E

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: {}
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrUser();

    if (user) {
      this.setState({
        authenticated: true,
        user: user
      })
    }
  }

  render() {

    const { authenticated, user } = this.state

    const headerItems = [
      {
          label: "Explore",
          href: "/explore"
      },
      {
          label: "Invest",
          href: "/invest"
      },
      {
          label: "Community",
          href: "/community"
      },
    ]

    if (authenticated) {
      headerItems.push({ label: "Dashboard", href: "/dashboard" })
      headerItems.push({ label: "Sign Out", href: "/logout"})
    } else {
      headerItems.push({ label: "Sign In/Sign Up", href: "/register" })
    }

    return (
      <div>
        <Header headerItems={headerItems} />
        <div style={{marginTop: "100px"}} />
        <Routes>
          <Route exact path="explore" element={<Explore />} />
          <Route exact path="logout" element={<Logout />} />
            <Route exact path="home" element={<NewsContextProvider> <News /> </NewsContextProvider>} />
            <Route exact path="community" element={<Community />} />
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="invest" element = {<Invest />} />
          </Routes>
        </div>
    );
  }
}

export default App;

