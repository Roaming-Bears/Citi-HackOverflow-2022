import React from 'react'
import Post from './Post';
import './post.css'

const Feed = () => {
    const feed = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "title",
            description: "description",
            user: "user",
            date: "date",
        },
        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0070/7032/files/best-free-stock-photo-websites.jpg?v=1619036042&width=1024",
            title: "title",
            description: "description jfsdlkfriop jjvbnadoufr oiaeurfnv d ilfngwae lkhdogtfujew fpergvfdnbvl; rpegdfnv perugfdafl gvewpfjraepo gtdvnepir4 gvpergbvnlfdku gt4ep09  vbdidgf versu tg4e fldgjv dsfj vbpierrft90gu et fpiru gojdroig 4opeut fg0e vbgeor fgerjfgtp rdfhgvope4 u9tf  gioweru ftge g90-",
            user: "user",
            date: "date",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "title",
            description: "description jfsdlkfriop jjvbnadoufr oiaeurfnv d ilfngwae lkhdogtfujew fpergvfdnbvl; rpegdfnv perugfdafl gvewpfjraepo gtdvnepir4 gvpergbvnlfdku gt4ep09  vbdidgf versu tg4e fldgjv dsfj vbpierrft90gu et fpiru gojdroig 4opeut fg0e vbgeor fgerjfgtp rdfhgvope4 u9tf  gioweru ftge g90-",
            user: "user",
            date: "date",
        },
    ]

    return (
        <div>
            <h1 className="head__text">Check out the buzz in the community.</h1>
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