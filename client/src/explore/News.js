import React from 'react'
import './style.css'
import NewsArticle from './NewsArticle';

const News = () => {

    const news = [
        {
            title: "title",
            description: "description",
            author: "author",
            publishedAt: "today",
            source: {
                name: "publisher"
            },
            url: "http://news.com"
        },
        {
            title: "title",
            description: "description",
            author: "author",
            publishedAt: "today",
            source: {
                name: "publisher"
            },
            url: "http://news.com"
        },
        {
            title: "title",
            description: "description",
            author: "author",
            publishedAt: "today",
            source: {
                name: "publisher"
            },
            url: "http://news.com"
        },
        {
            title: "title",
            description: "description",
            author: "author",
            publishedAt: "today",
            source: {
                name: "publisher"
            },
            url: "http://news.com"
        },
        {
            title: "title",
            description: "description",
            author: "author",
            publishedAt: "today",
            source: {
                name: "publisher"
            },
            url: "http://news.com"
        }
    ]

    return (
        <div>
            <div className="all__news">
                {news
                ? news.map((data) => (
                    <NewsArticle data={data} key={data.url} />
                    ))
                : "Loading"}
            </div>
        </div>
    );
}

export default News