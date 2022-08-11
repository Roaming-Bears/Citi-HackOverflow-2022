import React from 'react'
import timelineData from './data'
import MilestoneItem from './MilestoneItem'
import "./milestone.css"

const Milestone =() =>
    timelineData.length > 0 && (
        <div className='timeline-container'>
            <h1 style={{textAlign:'center',padding: 20}}>Client Milestone</h1>
            {timelineData.map((data, idx) => (
                <MilestoneItem data={data} key={idx} />
            ))}
        </div>
);

export default Milestone;