import React from 'react';
import {useLocation} from 'react-router-dom';
const ImprovementContainer = () => {
    // TRANSPORT - transport >= bus recommend walking if i equals walking congrulate them say well done 
    // FOOD - foodcounter > X say you can improve.... detail what they can else ssay well done 
    // TRAVEL - travelcounter > X say you should decrease your long flights and do more staycations else say well done 
    // console.log(resultsMap)
    const location = useLocation();
    const data = location.state
    console.log(data)


    return (
        <p>{data}</p>
    )
}

export default ImprovementContainer