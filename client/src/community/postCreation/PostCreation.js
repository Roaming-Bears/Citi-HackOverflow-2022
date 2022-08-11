import { TextField } from '@material-ui/core'
import React from 'react'
import './style.css'

const PostCreation = () => {
    
    return (
        <div>
            
            <div className="post__creation">
                <img className="user__img" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="" />
                <input className="input__field" placeholder="What do you want to share with the community?" />
                <button className="post__button">Post</button>
            </div>
        </div>
    )
}

export default PostCreation