import React from 'react'

export const ResultsPage = ({surveyResults}) => {

    let counter = 0;
    const results = JSON.parse(surveyResults)
    const resultsMap = new Map(Object.entries(results));
    console.log(resultsMap)

    //COUNTER CALCS - YOU ARE ENTERING HELLS DEN

    // NOTE
    // Could add two arrays of the choices and values
    // and loop through them to not DRY


    // Transport 
    counter += resultsMap.get('Transport')
    // Cheese
    if (resultsMap.get('CheeseChoice')){
        counter += resultsMap.get('CheeseChoice') * 5
        console.log(1)
    }
    // Milk
    if (resultsMap.get('MilkChoice')){
        console.log(2)
        counter += resultsMap.get('MilkChoice') * 5
    }
    // Egg
    if (resultsMap.get('EggChoice')){
        console.log(3)
        counter += resultsMap.get('EggChoice') * 5
    }
    // Beef
    if (resultsMap.get('Beef Choice')){
        console.log(4)
        counter += resultsMap.get('BeefChoice') * 5
    }
    // Lamb
    if (resultsMap.get('LambChoice')){
        console.log(5)
        counter += resultsMap.get('LambChoice') * 5
    }
    // Pork
    if (resultsMap.get('PorkChoice')){
        console.log(6)
        counter += resultsMap.get('PorkChoice') * 5
    }
    // TinnedFish
    if (resultsMap.get('TinnedFishChoice')){
        console.log(7)
        counter += resultsMap.get('TinnedFishChoice') * 5
    }
    // Shellfish
    if (resultsMap.get('ShellfishChoice')){
        console.log(8)
        counter += resultsMap.get('ShellfishChoice') * 5
    }
    // FreshFish
    if (resultsMap.get('FreshFishChoice')){
        console.log(9)
        counter += resultsMap.get('FreshFishChoice') * 5
    }
    // UK
    if (resultsMap.get('UKChoice')){
        console.log(10)
        counter += resultsMap.get('UKChoice') * 5
    }
    // Europe
    if (resultsMap.get('EuropeChoice')){
        console.log(11)
        counter += resultsMap.get('EuropeChoice') * 5
    }
    // NorthAmerica
    if (resultsMap.get('NorthAmericaChoice')){
        console.log(12)
        counter += resultsMap.get('NorthAmericaChoice') * 5
    }
    // SouthAmerica
    if (resultsMap.get('SouthAmericaChoice')){
        console.log(13)
        counter += resultsMap.get('SouthAmericaChoice') * 5
    }
    // Oceania
    if (resultsMap.get('OceaniaChoice')){
        console.log(14)
        counter += resultsMap.get('OceaniaChoice') * 5
    }
    // Africa
    if (resultsMap.get('AfricaChoice')){
        console.log(15)
        counter += resultsMap.get('AfricaChoice') * 5
    }

    console.log(counter)




    return (
        <>
        <div>
            <p>Your CO2 Footprint is: {counter} tons CO² per year</p>
            {surveyResults}
        </div>
        </>
        
    )
}
