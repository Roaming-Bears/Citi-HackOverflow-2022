import React from 'react'
import './style.css'

const PostCreation = () => {

    const image_src = "https://thumbs.dreamstime.com/b/user-sign-icon-person-symbol-human-avatar-successful-woman-84527747.jpg"
    
    return (
        <div>
            <div className="post__creation">
                <img className="user__img" src={image_src} alt="" />
                <input
                    className="input__field"
                    placeholder="What do you want to share with the community?"
                />
                <button className="post__button">Post</button>
            </div>
        </div>
    )
}

export default PostCreation