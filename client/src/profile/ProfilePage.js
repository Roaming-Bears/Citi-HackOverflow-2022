import React from 'react'
import { ProgressBar } from "react-milestone";
/*
type Milestone = {
    index: number,
    size: number,
    position: number,
    current: boolean,
    completed: boolean
  };*/

function ProfilePage() {
    return (
        <div style={{marginTop: '100px', marginLeft:'130px'}}>
            <h2 style={{marginLeft:'180px'}}>Journey with Roaming Bears</h2>
            <ProgressBar 
                percentage={40} 
                color="green" 
                transitionSpeed={1000} 
                milestoneCount={6} 
                style={{width:'80%'}}
                //Milestone={(milestone: Milestone) => <div><small>Milestone</small></div>}
                //CurrentMilestone={(milestone: Milestone) => <div>current</div>}
                //Milestone1={(milestone: Milestone) => <div>current</div>}
                //CompletedMilestone={(milestone: Milestone) => <div>completed</div>}
                //Milestone={(milestone) => (<div>1<Badge status="success" /></div>)}
                />
                <p style={{marginLeft:'-70px'}}>Created Account</p>
                <p style={{marginLeft:'80px', marginTop:'-34px'}}>Purchased 1st</p>
                <p style={{marginLeft:'80px', marginTop:'-17px'}}>investment plan</p>
                <p style={{marginLeft:'220px', marginTop:'-51px'}}>Saved $100,000</p>
        </div>
    )
}

export default ProfilePage
