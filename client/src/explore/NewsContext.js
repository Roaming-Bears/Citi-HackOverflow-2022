import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "567845fae7a74ce3b4e51bdec331b995";

    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
        ).then((response) => setData(response.data))
            .catch((error) => console.log(error));


    }, []);

    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    )
}

