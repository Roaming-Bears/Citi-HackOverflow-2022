import React from 'react'
import './post.css'

const Post = ({ data }) => {
    return (
        <div className="post">
            <img className="post__image" src={data.image}/>
            <h2 className="post__title">{data.title}</h2>
            <p className="post__desc">{
                data.description.length > 100 ? data.description.substring(0, 99) +"..."  : data.description
            }</p>
            <span className="post__user">{data.user}</span> <br />
            <span className="post__date">{data.date}</span>
        </div>
    );
}

export default Post