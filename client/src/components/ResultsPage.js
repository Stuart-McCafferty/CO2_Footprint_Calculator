import React, {useState} from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ImprovementContainer from '../containers/ImprovementContainer';
import { postUser } from './QuizService';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export const ResultsPage = ({surveyResults}) => {

    // const [transportTotal, setTransportTotal] = useState('')
    // const [foodTotal, setFoodTotal] = useState('')
    // const [travelTotal, setTravelTotal] = useState('')


    let counter = 0;
    let transportCounter = 0;
    let foodCounter = 0;
    let travelCounter = 0;
    const results = JSON.parse(surveyResults)
    const resultsMap = new Map(Object.entries(results));
    console.log(resultsMap)

    
    // strigafy transport counter etc what do they return??
    // do we need to send back all the info? All objects don't need to be the same.

    //COUNTER CALCS - YOU ARE ENTERING HELLS DEN

    // NOTE
    // Could add two arrays of the choices and values
    // and loop through them to not DRY


    // Transport 
    counter += resultsMap.get('Transport')
    transportCounter = resultsMap.get('Transport')

    // Cheese
    if (resultsMap.get('CheeseChoice')){
        counter += resultsMap.get('CheeseChoice') * 102
        console.log(1)
        foodCounter += resultsMap.get('CheeseChoice') * 102
        
    }
    // Milk
    if (resultsMap.get('MilkChoice')){
        console.log(2)
        counter += resultsMap.get('MilkChoice') * 12
        foodCounter += resultsMap.get('MilkChoice') * 12

    }
    // Egg
    if (resultsMap.get('EggChoice')){
        console.log(3)
        counter += resultsMap.get('EggChoice') * 22
        foodCounter += resultsMap.get('EggChoice') * 22
    }
    // Cheese2
    if (resultsMap.get('CheeseChoice2')){
        counter += resultsMap.get('CheeseChoice2') * 102
        console.log(1)
        foodCounter += resultsMap.get('CheeseChoice2') * 102
        
    }
    // Milk2
    if (resultsMap.get('MilkChoice2')){
        console.log(2)
        counter += resultsMap.get('MilkChoice2') * 12
        foodCounter += resultsMap.get('MilkChoice2') * 12

    }
    // Egg2
    if (resultsMap.get('EggChoice2')){
        console.log(3)
        counter += resultsMap.get('EggChoice2') * 22
        foodCounter += resultsMap.get('EggChoice2') * 22
    }
    // Beef
    if (resultsMap.get('Beef Choice')){
        console.log(4)
        counter += resultsMap.get('BeefChoice') * 175
        foodCounter += resultsMap.get('BeefChoice') * 175
    }
    // Lamb
    if (resultsMap.get('LambChoice')){
        console.log(5)
        counter += resultsMap.get('LambChoice') * 256
        foodCounter += resultsMap.get('LambChoice') * 256
    }
    // Pork
    if (resultsMap.get('PorkChoice')){
        console.log(6)
        counter += resultsMap.get('PorkChoice') * 79
        foodCounter += resultsMap.get('PorkChoice') * 79
    }
    // TinnedFish
    if (resultsMap.get('TinnedFishChoice')){
        console.log(7)
        counter += resultsMap.get('TinnedFishChoice') * 40
        foodCounter += resultsMap.get('TinnedFishChoice') * 40
    }
    // Shellfish
    if (resultsMap.get('ShellfishChoice')){
        console.log(8)
        counter += resultsMap.get('ShellfishChoice') * 21
        foodCounter += resultsMap.get('ShellfishChoice') * 21
    }
    // FreshFish
    if (resultsMap.get('FreshFishChoice')){
        console.log(9)
        counter += resultsMap.get('FreshFishChoice') * 16
        foodCounter += resultsMap.get('FreshFishChoice') * 16
    }
    // UK
    if (resultsMap.get('UKChoice')){
        console.log(10)
        counter += resultsMap.get('UKChoice') * 10
        travelCounter += resultsMap.get('UKChoice') * 10
    }
    // Europe
    if (resultsMap.get('EuropeChoice')){
        console.log(11)
        counter += resultsMap.get('EuropeChoice') * 600
        travelCounter += resultsMap.get('EuropeChoice') * 600

    }
    // NorthAmerica
    if (resultsMap.get('NorthAmericaChoice')){
        console.log(12)
        counter += resultsMap.get('NorthAmericaChoice') * 1550
        travelCounter += resultsMap.get('NorthAmericaChoice') * 1550
    }
    // SouthAmerica
    if (resultsMap.get('SouthAmericaChoice')){
        console.log(13)
        counter += resultsMap.get('SouthAmericaChoice') * 2800
        travelCounter += resultsMap.get('SouthAmericaChoice') * 2800
    }
    // Oceania
    if (resultsMap.get('OceaniaChoice')){
        console.log(14)
        counter += resultsMap.get('OceaniaChoice') * 5000
        travelCounter += resultsMap.get('OceaniaChoice') * 5000
    }
    // Africa
    if (resultsMap.get('AfricaChoice')){
        console.log(15)
        counter += resultsMap.get('AfricaChoice') * 2290
        travelCounter += resultsMap.get('AfricaChoice') * 2290
    }

    postUser({
        firstName : resultsMap.get('FirstName'),
        transportScore : transportCounter,
        foodScore : foodCounter,
        travelScore : travelCounter
    });


    console.log(counter)
    const climateMafiaBoss = 5000;
    const climateThug = 3000;
    const climateCitizen = 1000;
    const climateHero = 1;

    let user = ""
    let introText = ""

    if (counter >= climateMafiaBoss){
        user = "Climate Criminal"
        introText = "Oh dear..."
    } else if(counter >=climateThug && counter < climateMafiaBoss ){
        user = "Climate Thug"
        introText = "Uh oh"
    } else if(counter >= climateCitizen && counter < climateThug){
        user = "Climate Citizen!"
        introText = "Well done"
    } else {
        user = "Climate Hero!"
        introText = "Congratulations"
    }

    console.log(surveyResults)


    return (
        <>
        <div>
            <ResultsHeading>Your CO² Footprint per year is: </ResultsHeading>
            <TotalScore>{counter} kg</TotalScore>
            <h4>{introText} you are a {user}</h4>
            {user === "Climate Criminal" ? <img src={require('./MafiaBoss.jpeg')} height={300} width={300} /> : null}
            {user === "Climate Thug" ? <img src={require('./Climate_Thug.png')} height={300} width={300} /> : null}
            {user === "Climate Citizen" ? <img src={require('./Citizen.jpg')} height={300} width={300} />: null}
            {user === "Climate Hero" ? <img src={require('./Climatehero.jpg')}  height={300} width={300} /> : null}

            <p>Your Transport CO2 is: {transportCounter} kg of CO² per year</p>
            <p>Your Food CO2 is: {foodCounter} kg of CO² per year</p>
            <p>Your Travel CO2 is: {travelCounter } kg of CO² per year</p>


            <Link to= "/improvements" state={ resultsMap }>
                <Button>             
                    Find out how to reduce you're footprint here!
                </Button>  
            </Link>
            

            
        </div>
        </>
        
    )
}

const ResultsHeading = styled.h3`
    font-family: 'Karla', sans-serif;
    letter-spacing: 1.5px;
`
const TotalScore = styled.h2`

    font-family: 'Rubik Dirt';
    font-size: 24px;
    font-weight: bold;
`
const Button = styled.button`
    background-color: #1AB394;
    color: white; 
    border-radius: 5px;
    padding: 5px;
`

