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
        <div style={{marginTop: '100px', textAlign:'center'}}>
            <h2 style={{paddingBottom:10}}>Journey with Roaming Bears</h2>
            <ProgressBar 
                percentage={40} 
                color="green" 
                transitionSpeed={1000} 
                milestoneCount={6} 
                style={{width:'100%'}}
                //Milestone={(milestone: Milestone) => <div><small>Milestone</small></div>}
                //CurrentMilestone={(milestone: Milestone) => <div>current</div>}
                //Milestone1={(milestone: Milestone) => <div>current</div>}
                //CompletedMilestone={(milestone: Milestone) => <div>completed</div>}
                //Milestone={(milestone) => (<div>1<Badge status="success" /></div>)}
                />
            <h5 style={{display:'flex', alignItems:'center', textAlign:'left', paddingTop:10}}>
                <p style={{marginLeft:'-40px', flexGrow:0.13}}>Created Account</p>
                <p style={{inlineSize:'140px', overflowWrap:'break-word'}}>Purchased 1st investment plan</p>
                <p style={{}}>Saved $100,000</p>
            </h5>
            
        </div>
    )
}

export default ProfilePage
