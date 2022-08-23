import React from 'react'

export const ResultsPage = ({surveyResults}) => {

    let counter = 0;
    let transportCounter = 0;
    let foodCounter = 0;
    let travelCounter = 0;
    const results = JSON.parse(surveyResults)
    const resultsMap = new Map(Object.entries(results));
    console.log(resultsMap)

    //COUNTER CALCS - YOU ARE ENTERING HELLS DEN

    // NOTE
    // Could add two arrays of the choices and values
    // and loop through them to not DRY


    // Transport 
    counter += resultsMap.get('Transport')
    transportCounter = resultsMap.get('Transport')

    // Cheese
    if (resultsMap.get('CheeseChoice')){
        counter += resultsMap.get('CheeseChoice') * 5
        console.log(1)
        foodCounter += resultsMap.get('CheeseChoice') * 5
        
    }
    // Milk
    if (resultsMap.get('MilkChoice')){
        console.log(2)
        counter += resultsMap.get('MilkChoice') * 5
        foodCounter += resultsMap.get('MilkChoice') * 5

    }
    // Egg
    if (resultsMap.get('EggChoice')){
        console.log(3)
        counter += resultsMap.get('EggChoice') * 5
        foodCounter += resultsMap.get('EggChoice') * 5
    }
    // Beef
    if (resultsMap.get('Beef Choice')){
        console.log(4)
        counter += resultsMap.get('BeefChoice') * 5
        foodCounter += resultsMap.get('BeefChoice') * 5
    }
    // Lamb
    if (resultsMap.get('LambChoice')){
        console.log(5)
        counter += resultsMap.get('LambChoice') * 5
        foodCounter += resultsMap.get('LambChoice') * 5
    }
    // Pork
    if (resultsMap.get('PorkChoice')){
        console.log(6)
        counter += resultsMap.get('PorkChoice') * 5
        foodCounter += resultsMap.get('PorkChoice') * 5
    }
    // TinnedFish
    if (resultsMap.get('TinnedFishChoice')){
        console.log(7)
        counter += resultsMap.get('TinnedFishChoice') * 5
        foodCounter += resultsMap.get('TinnedFishChoice') * 5
    }
    // Shellfish
    if (resultsMap.get('ShellfishChoice')){
        console.log(8)
        counter += resultsMap.get('ShellfishChoice') * 5
        foodCounter += resultsMap.get('ShellfishChoice') * 5
    }
    // FreshFish
    if (resultsMap.get('FreshFishChoice')){
        console.log(9)
        counter += resultsMap.get('FreshFishChoice') * 5
        foodCounter += resultsMap.get('FreshFishChoice') * 5
    }
    // UK
    if (resultsMap.get('UKChoice')){
        console.log(10)
        counter += resultsMap.get('UKChoice') * 5
        travelCounter += resultsMap.get('UKChoice') * 5
    }
    // Europe
    if (resultsMap.get('EuropeChoice')){
        console.log(11)
        counter += resultsMap.get('EuropeChoice') * 5
        travelCounter += resultsMap.get('EuropeChoice') * 5

    }
    // NorthAmerica
    if (resultsMap.get('NorthAmericaChoice')){
        console.log(12)
        counter += resultsMap.get('NorthAmericaChoice') * 5
        travelCounter += resultsMap.get('NorthAmericaChoice') * 5
    }
    // SouthAmerica
    if (resultsMap.get('SouthAmericaChoice')){
        console.log(13)
        counter += resultsMap.get('SouthAmericaChoice') * 5
        travelCounter += resultsMap.get('SouthAmericaChoice') * 5
    }
    // Oceania
    if (resultsMap.get('OceaniaChoice')){
        console.log(14)
        counter += resultsMap.get('OceaniaChoice') * 5
        travelCounter += resultsMap.get('OceaniaChoice') * 5
    }
    // Africa
    if (resultsMap.get('AfricaChoice')){
        console.log(15)
        counter += resultsMap.get('AfricaChoice') * 5
        travelCounter += resultsMap.get('AfricaChoice') * 5
    }

    console.log(counter)

    const climateMafiaBoss = 5;
    const climateThug = 3;
    const climateCitizen = 2;
    const climateHero = 1;

    let user = ""

    if (counter >= climateMafiaBoss){
        user = "Climate Mafia Boss"
    } else if(counter >=climateThug && counter < climateMafiaBoss ){
        user = "Climate Thug"
    } else if(counter >= climateCitizen && counter < climateThug){
        user = "Climate Citizen"
    } else {
        user = "Climate Hero"
    }

    console.log(surveyResults)

    return (
        <>
        <div>
            <h3>Your CO2 Footprint is: {counter} Tons of CO² per year</h3>
            <h4>You are a {user}</h4>
            {user === "Climate Mafia Boss" ? <p>Mafia IMAGE GOES HERE</p> : null}
            {user === "Climate Thug" ? <p>Thug IMAGE GOES HERE</p> : null}
            {user === "Climate Citizen" ? <p>Citizen IMAGE GOES HERE</p> : null}
            {user === "Climate Hero" ? <p>Hero IMAGE GOES HERE</p> : null}

            <p>Your Transport CO2 is: {transportCounter} Tons of CO² per year</p>
            <p>Your Food CO2 is: {foodCounter} Tons of CO² per year</p>
            <p>Your Travel CO2 is: {travelCounter } Tons of CO² per year</p>
        </div>
        </>
        
    )
}
