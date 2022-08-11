import React from 'react'
import BankerMilestone from './banker-milestone/Milestone'
import Bankers from './Bankers'
import ChurnAnalysis from './ChurnAnalysis'
import ClientMilestone from "./client-milestone/Milestone";

const Dashboard = () => {
    return (
        <div>
            <ChurnAnalysis />
            <Bankers />
            <BankerMilestone />
            <ClientMilestone />
        </div>
  )
}

export default Dashboard