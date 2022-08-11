import React from 'react'
import Timeline from './timeline/Timeline'
import Bankers from './Bankers'
import ChurnAnalysis from './ChurnAnalysis'

const Dashboard = () => {
    return (
        <div>
            <ChurnAnalysis />
            <Bankers />
            <Timeline />
        </div>
  )
}

export default Dashboard