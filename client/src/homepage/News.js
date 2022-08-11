import React, { useContext } from 'react'
import './style.css'
import NewsArticle from './NewsArticle';
import WordCloud from './WordCloud';
import { NewsContext } from './NewsContext';

const News = (props) => {

    const { data } = useContext(NewsContext)

    console.log(data);

    return (
        <div>
            <h1 className="head__text">What's happening in the world today?</h1>
            <div>
                <WordCloud />
            </div>
            <div className="all__news">
                {data
                ? data.articles.map(news => (
                    <NewsArticle data={news} key={news.url} />
                    ))
                : "Loading"}
            </div>
        </div>
    );
}

export default News