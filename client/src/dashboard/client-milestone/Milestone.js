import React from 'react'
import data from './data'
import MilestoneItem from './MilestoneItem'
import "./milestone.css"

const ClientMilestone =() =>
    data.length > 0 && (
        <div className='timeline-container'>
            <h1 style={{textAlign:'center',padding: 20}}>Client Milestone</h1>
            {data.map((data, idx) => (
                <MilestoneItem data={data} key={idx} />
            ))}
        </div>
    );

export default ClientMilestone;
