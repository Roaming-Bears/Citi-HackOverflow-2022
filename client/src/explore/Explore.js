import React from 'react'
import News from './News'
import WordCloud from './WordCloud'
import './style.css'
import { NewsContextProvider } from './NewsContext'

const Explore = () => {
    return (
        <div>
            <h1 className="head__text">What's happening in the world today?</h1>
            <WordCloud />
            <NewsContextProvider>
                <News />
            </NewsContextProvider>
        </div>
    )
}

export default Explore