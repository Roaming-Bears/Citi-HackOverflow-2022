import React from 'react'
import Post from './Post';
import './post.css'

const Feed = () => {
    const feed = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Helpful Citi wealth manager 🤝",
            description: "The wealth manager I work with from Citi has been really helpful!",
            user: "hungrypanda",
            date: "today 9:11am",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfqz1t_YEUom_AvVXBuG_0ZfVJsV57uULVPg&usqp=CAU",
            title: "My stocks are doing well 🤑",
            description: "Small-cap stocks led the market higher, with the iShares Russell 2000 ETF (IWM 0.37%) up a strong 2%. Financials continued their recent run, and the SPDR S&P Bank ETF (KBE 1.35%) added 2.1%. As for individual stocks, Micron Technology (MU 1.50%) blew away expectations for most recent quarter, and Nike (NKE 0.85%) also beat estimates, but offered little hope for improvement in its U.S. business.Shares of computer memory producer Micron Technology soared 8.5% after the company reported fiscal fourth-quarter results that beat analyst expectations for sales and earnings. Revenue was up 91% from last year to $6.14 billion, while Wall Street was looking for $5.96 billion. Non-GAAP earnings per share came in at $2.02, compared with analysts' estimate of $1.83. Micron is benefiting from increased demand for computer memory and rising prices in the industry due to supply constraints. DRAM sales volumes were 5% higher than the previous quarter, and prices increased 8%. NAND volumes were up 3% sequentially, with average selling price climbing 5%. The company gave strong guidance for the upcoming quarter, too. Revenue guidance for the current quarter is $6.1 billion to $6.5 billion, with EPS between $2.09 and $2.23. Analysts had been expecting the company to earn $1.85 per share on $6.06 billion in sales. ",
            user: "stonkist",
            date: "yesterday 7:15pm",
        },
        {
            id: 3,
            image: "data:image/jpeg;base64,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",
            title: "Loving the community here ❤️",
            description: "I really like this is a vibrant community. I made a lot of like-minded friends and learnt a lot about managing my wealth here too. Thank you Citi!",
            user: "cloudyducky",
            date: "yesterday 12:46pm",
        },
    ]

    return (
        <div>
            <h1 className="head__text">Check out the buzz in the community today.</h1>
            <div className="feed">
                {feed
                ? feed.map((data) => (
                    <Post data={data} key={data.id} />
                    ))
                : "Loading"}
            </div>
        </div>
    );
}

export default Feed