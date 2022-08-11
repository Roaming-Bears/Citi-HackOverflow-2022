import React from 'react'
import ReactWordcloud from 'react-wordcloud';
import Words from './Words';

const options = {
    fontFamily: 'courier new',
    fontSizes: [20, 70],
};

function WordCloud() {
    return (
        <div >
            <ReactWordcloud 
            words={Words} 
            options={options}
            />
        </div>
    )
}

export default WordCloud
