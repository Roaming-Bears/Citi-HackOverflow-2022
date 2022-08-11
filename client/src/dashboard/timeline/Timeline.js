import React from 'react'
import timelineData from './data'
import TimelineItem from './TimelineItem'
import "./timeline.css"

const Timeline =() => 
    timelineData.length > 0 && (
        <div className='timeline-container'>
            <h1 style={{textAlign:'center',padding: 20}}>Application Status</h1>
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
);

export default Timeline;