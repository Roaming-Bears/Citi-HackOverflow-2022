import React from 'react'
import News from './News'
import WordCloud from './WordCloud'
import './style.css'

const Explore = () => {
    return (
        <div>
            <h1 className="head__text">What's happening in the world today?</h1>
            <WordCloud />
            <News />
        </div>
    )
}

export default Explore