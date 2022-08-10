import React, { useState, useEffect } from 'react'
import animations from './components/questionnaire.js'
import questionnaire from "./components/questionnaire.js";

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/home").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {
        (typeof data.news == 'undefined') ? (
          <p>Loading...</p>
        ) : (
            data.news.map((article, i) => (
              <p key={i}>{article}</p>
            ))
        )
      }
    </div>

    </div>
      questionnaire
    </div>
  );
}

export default App;
