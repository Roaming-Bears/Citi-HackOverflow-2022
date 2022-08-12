import React from 'react'
import ReactCohortGraph from "react-cohort-graph";

const DATA = {
    days: {
        "Aaron": [250, 190, 225, 180, 175, 163, 160, 150, 150, 146, 144, 143, 120, 120, 120, 120, 103, 100],
        "Bryan": [300, 293, 286, 280, 195, 182, 175, 170, 155, 155, 155, 154, 153, 150, 150, 150, 150, 125],
        "Chloe": [200, 198, 182, 180, 175, 172, 165, 161, 155, 155, 145, 144, 142, 136, 134, 130, 120, 115],
        "Dylan": [200, 198, 192, 188, 175, 172, 155, 151, 135, 125, 125, 123, 123, 122, 120, 119, 111, 105],
        "Emma": [300, 299, 292, 288, 285, 272, 265, 261, 255, 255, 255, 255, 253, 250, 245, 239, 225, 210],
    },
    weeks: {
        "week1": [200, 10, 20],
        "week2": [300, 200],
        "week3": [200]
    },
    months: {
        "month1": [200, 10, 20, 30],
        "month2": [300, 200, 150],
        "month3": [200, 110],
        "month4": [100]
    }
};


function ChurnAnalysis() {
    return (
        <div>
            <h2>Customer Churn Analysis</h2>
        <ReactCohortGraph
        data={DATA}
        showHeaderValues
      />
        </div>
    )
}

export default ChurnAnalysis
