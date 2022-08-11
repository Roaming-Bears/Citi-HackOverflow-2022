import React from 'react'
import AuthService from '../auth/AuthService';
import BankerMilestone from './banker-milestone/Milestone'
import Bankers from './Bankers'
import ChurnAnalysis from './ChurnAnalysis'
import ClientMilestone from "./client-milestone/Milestone";

const Dashboard = () => {
    const user = AuthService.getCurrUser()
    const role = user.role
    return (
        (role == "client") ?
            <div>
                <ClientMilestone />
                <img src="https://www.klipfolio.com/gatsby-files/static/1d0d4b2e191a15d080c3857830cdedea/9e562/dashboard-examples-hero.png" />
            </div> :
            <div>
                <ChurnAnalysis />
                <Bankers />
                <BankerMilestone />
            </div>
            
  )
}

export default Dashboard