import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import './containersCss.css'


const ImprovementContainer = () => {
    //get resultsMap
    const location = useLocation();
    const resultsMap = location.state
    console.log(resultsMap)
    // const [totalChange, setTotalChange] = useState(0);

    //Calcs to find out the counters as I could only pass one thing through - :(
    //Set counters and arrays 
    let counter = 0;
    let transportCounter = 0;
    let foodCounter = 0;
    let travelCounter = 0;
    let foodList = [];
    let foodPortion = [];
    let foodValues = [];
    let travelList = [];
    let travelNumber = [];
    let travelValues = [];


    // Transport 
    counter += resultsMap.get('Transport')
    transportCounter = resultsMap.get('Transport')

    // Cheese
    if (resultsMap.get('CheeseChoice')){
        foodList.push("Cheese")
        counter += resultsMap.get('CheeseChoice') * 102
        foodCounter += resultsMap.get('CheeseChoice') * 102
        foodPortion.push(resultsMap.get('CheeseChoice'))
        foodValues.push(102);
        
    }
    // Milk
    if (resultsMap.get('MilkChoice')){
        foodList.push("Milk")
        counter += resultsMap.get('MilkChoice') * 12
        foodCounter += resultsMap.get('MilkChoice') * 12
        foodPortion.push(resultsMap.get('MilkChoice'))
        foodValues.push(12);

    }
    // Egg
    if (resultsMap.get('EggChoice')){
        foodList.push("Egg")
        counter += resultsMap.get('EggChoice') * 22
        foodCounter += resultsMap.get('EggChoice') * 22
        foodPortion.push(resultsMap.get('EggChoice'))
        foodValues.push(22);


    }
    // Cheese2
    if (resultsMap.get('CheeseChoice2')){
        foodList.push("Cheese")
        counter += resultsMap.get('CheeseChoice2') * 102
        console.log(1)
        foodCounter += resultsMap.get('CheeseChoice2') * 102
        foodPortion.push(resultsMap.get('CheeseChoice2'))
        foodValues.push(102);
        
    }
    // Milk2
    if (resultsMap.get('MilkChoice2')){
        foodList.push("Milk")
        console.log(2)
        counter += resultsMap.get('MilkChoice2') * 12
        foodCounter += resultsMap.get('MilkChoice2') * 12
        foodPortion.push(resultsMap.get('MilkChoice2'))
        foodValues.push(12);

    }
    // Egg2
    if (resultsMap.get('EggChoice2')){
        foodList.push("Egg")
        console.log(3)
        counter += resultsMap.get('EggChoice2') * 22
        foodCounter += resultsMap.get('EggChoice2') * 22
        foodPortion.push(resultsMap.get('EggChoice2'))
        foodValues.push(22);
    }
    // Beef
    if (resultsMap.get('Beef Choice')){
        foodList.push("Beef")
        console.log(4)
        counter += resultsMap.get('BeefChoice') * 175
        foodCounter += resultsMap.get('BeefChoice') * 175
        foodPortion.push(resultsMap.get('BeefChoice'))
        foodValues.push(175);
    }
    // Lamb
    if (resultsMap.get('LambChoice')){
        foodList.push("Lamb")
        console.log(5)
        counter += resultsMap.get('LambChoice') * 256
        foodCounter += resultsMap.get('LambChoice') * 256
        foodPortion.push(resultsMap.get('LambChoice'))
        foodValues.push(256);
    }
    // Pork
    if (resultsMap.get('PorkChoice')){
        foodList.push("Pork")
        console.log(6)
        counter += resultsMap.get('PorkChoice') * 79
        foodCounter += resultsMap.get('PorkChoice') * 79
        foodPortion.push(resultsMap.get('PorkChoice'))
        foodValues.push(79);
    }
    // TinnedFish
    if (resultsMap.get('TinnedFishChoice')){
        foodList.push("Tinned Fish")
        console.log(7)
        counter += resultsMap.get('TinnedFishChoice') * 40
        foodCounter += resultsMap.get('TinnedFishChoice') * 40
        foodPortion.push(resultsMap.get('TinnedFishChoice'))
        foodValues.push(40);
    }
    // Shellfish
    if (resultsMap.get('ShellfishChoice')){
        foodList.push("Shellfish")
        console.log(8)
        counter += resultsMap.get('ShellfishChoice') * 21
        foodCounter += resultsMap.get('ShellfishChoice') * 21
        foodPortion.push(resultsMap.get('ShellfishChoice'))
        foodValues.push(21);
    }
    // FreshFish
    if (resultsMap.get('FreshFishChoice')){
        foodList.push("Fresh Fish")
        console.log(9)
        counter += resultsMap.get('FreshFishChoice') * 16
        foodCounter += resultsMap.get('FreshFishChoice') * 16
        foodPortion.push(resultsMap.get('FreshFishChoice'))
        foodValues.push(16);
    }
    // UK
    if (resultsMap.get('UKChoice')){
        console.log(10)
        travelList.push("UK")
        counter += resultsMap.get('UKChoice') * 10
        travelCounter += resultsMap.get('UKChoice') * 10
        travelNumber.push(resultsMap.get('UKChoice'))
        travelValues.push(10);
    }
    // Europe
    if (resultsMap.get('EuropeChoice')){
        travelList.push("Europe")
        counter += resultsMap.get('EuropeChoice') * 600
        travelCounter += resultsMap.get('EuropeChoice') * 600
        travelNumber.push(resultsMap.get('EuropeChoice'))
        travelValues.push(600);
    }
    // NorthAmerica
    if (resultsMap.get('NorthAmericaChoice')){
        travelList.push("North America")
        counter += resultsMap.get('NorthAmericaChoice') * 1550
        travelCounter += resultsMap.get('NorthAmericaChoice') * 1550
        travelNumber.push(resultsMap.get('NorthAmericaChoice'))
        travelValues.push(1550);
    }
    // SouthAmerica
    if (resultsMap.get('SouthAmericaChoice')){
        travelList.push("South America")
        counter += resultsMap.get('SouthAmericaChoice') * 2800
        travelCounter += resultsMap.get('SouthAmericaChoice') * 2800
        travelNumber.push(resultsMap.get('SouthAmericaChoice'))
        travelValues.push(2800);
    }
    // Oceania
    if (resultsMap.get('OceaniaChoice')){
        travelList.push("Oceania")
        counter += resultsMap.get('OceaniaChoice') * 5000
        travelCounter += resultsMap.get('OceaniaChoice') * 5000
        travelNumber.push(resultsMap.get('OceaniaChoice'))
        travelValues.push(5000);
    }
    // Africa
    if (resultsMap.get('AfricaChoice')){
        travelList.push("Africa")
        counter += resultsMap.get('AfricaChoice') * 2290
        travelCounter += resultsMap.get('AfricaChoice') * 2290
        travelNumber.push(resultsMap.get('AfricaChoice'))
        travelValues.push(2290);
    }

    console.log("This is transport " + transportCounter)
    console.log("This is food " + foodCounter)
    console.log("This is travel " + travelCounter)


    // TRANSPORT
    // Set/Get variables
    const [transportChange, setTransportChange] = useState(0);
    let transportPicked = ""
    // If statement to figure out what transport they used
    // Just realised I could have made a dictionary and accessed that... fml
    if (transportCounter === 470){
        transportPicked = "Car"
    } else if (transportCounter === 135){
        transportPicked = "Bus"
    } else if (transportCounter === 88){
        transportPicked = "Train"
    } else {
        transportPicked = "Walking/Cycling"
    }
    //Handle onClick
    const handleClick = (parameter) => (event) => {
        setTransportChange(transportCounter - parameter);
    }
    //Output
    function transport(){
        if (transportCounter > 87){
            return (
                <>
                <Text>Oh no...Your mode of transport is the {transportPicked}, this releases {transportCounter} kg of CO² per year</Text>
                <TextSml>You could decrease your CO2 emissions by Walking or Cycling</TextSml>
                <ButtonContainer>
                    <button onClick={handleClick(0)}>Walking/Cycling</button>
                    <button onClick={handleClick(88)}>Train</button>
                    <button onClick={handleClick(135)}>Bus</button>
                    <button onClick={handleClick(470)}>Car</button>
                </ButtonContainer>
                </>
                )
        } else {
            <>
            <Text>WOW, You are a climate hero!</Text>
            <TextSml>Walking is the best mode of transport, it produces no CO2 emissions!</TextSml>
            </>
        }
    }

    // FOOD
    //Set foodChange state
    const [foodChange, setFoodChange] = useState(0);
    // handleclicks
    const handleFoodClickYes = (parameter) => (event) => {
            setFoodChange(foodChange + (foodValues[parameter] *(foodPortion[parameter])));

        }

    const foodNodes = foodList.map((food, i) => {
        return (
            <>
            <h3>Will you stop eating {food}?</h3>
            <button id={i} onClick={handleFoodClickYes(i)}>Yes!</button> 
            </>

        )
    })

    function food(){
        if (foodCounter === 0){

            return (
                <>
                <Text>WOW, You are a vegan! Good for you pal</Text>
                <TextSml>That is sooo good for the environment</TextSml>
                </>
            )
        } else {
            return (
                <>
                    {foodNodes}
                </>
            )
        }
    }




    // TRAVEl
    // Set travel change state
    const [travelChange, setTravelChange] = useState(0)
     // handleclicks
    const handleFoodClickYesTravel = (parameter) => (event) => {
        setTravelChange(travelChange + (travelValues[parameter] *(travelNumber[parameter])));

    }

const travelNodes = travelList.map((travel, i) => {
    return (
        <>
        <TextSml>Will you reduce your travelling to {travel}?</TextSml>
        <button id={i} onClick={handleFoodClickYesTravel(i)}>Yes!</button> 
        </>

    )
})

function travel(){
    if (travel === 0){

        return (
            <>
            <Text>You have zero CO2 emissions for travel!</Text>
            <TextSml>Good for you pal</TextSml>
            <TextSml>That is sooo good for the environment</TextSml>
            </>
        )
    } else {
        return (
            <>
                {travelNodes}
            </>
        )
    }
}


let totalChange = transportChange + foodChange + travelChange



    return (
        <>

        <ImprovementPageContainer>
        <PageTitle>DO YOU WANNA BE A HERO OR A THUG?</PageTitle>
        <Text>Find out how a few small adjustments to your lifestyle could reduce your carbon footprint! </Text>

      <ImageConatiner>
        <ImageBoxRed>
            <img src={require('./NMafiaBoss.jpeg')} height={250} width={250} />
            <CharacterName>Climate Mafia Boss</CharacterName>
            <ScoreRange>5000 kg +</ScoreRange>
        </ImageBoxRed>
        <ImageBoxRed>
            <img src={require('./NClimateThug.png')} height={250} width={250} /> 
            <CharacterName>Climate Thug</CharacterName>
            <ScoreRange>3000 kg +</ScoreRange>
        </ImageBoxRed>
        <ImageBoxRed>
            <img src={require('./Ncitizen.png')} height={250} width={250} /> 
            <CharacterName>Climate Citizen</CharacterName>
            <ScoreRange>1000 kg +</ScoreRange>
        </ImageBoxRed>
        <ImageBoxRed>
            <img src={require('./NClimateHero.png')} height={250} width={250} /> 
            <CharacterName>Climate Hero</CharacterName>
            <ScoreRange>1 kg +</ScoreRange>
        </ImageBoxRed> 
        </ImageConatiner> 
        <BigScoreRange>Total Improvment Calculator</BigScoreRange>
        <TotalScoreContainer>
            <PageTitle>{totalChange} kg of CO² per year</PageTitle>
        </TotalScoreContainer> 
        <Text>See how changing your habits could improve your score by changing the variables below.</Text>
        <CalculatorContainer>
        <h2>Transport improvement calculator: {transportChange} kg of CO² per year</h2>
        {{transportCounter} ? transport() : null}
        <DivSpacer/>
        <h2>Food improvement calculator: {foodChange} kg of CO² per year</h2>
        {food()}
        <DivSpacer/>
        <h2>Travel improvement calculator: {travelChange} kg of CO² per year</h2>
        {travel()}
        </CalculatorContainer>
        </ImprovementPageContainer>
        </>
        

    )
}

export default ImprovementContainer

const ImprovementPageContainer = styled.main`
    background-color: #F9F5F0 ;
    padding: 10vh;

`

const ImageConatiner = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3vh;

`

const ImageBoxRed = styled.div`
    border-radius: 10px;
    background-color: white;
    border: 3px solid;

`
const CharacterName = styled.h2`
    font-family: 'Karla', sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-block-start: 0px;
    margin-block-end: 2px;
    
    
`
const Text = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 3vh;
    font-weight: bold;
    text-align: center;
    margin-block-start: 0px;
    margin-block-end: 2px;
    
    
`
const TextSml = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 2.5vh;
    font-weight: bold;
    text-align: center;
    margin-block-start: 3vh;
    margin-block-end: 1vh;
    
    
`
const BigScoreRange = styled.h2`
    font-family: 'Rubik Dirt';
    font-size: 25px;
    text-align: center;
    margin-block-start: 5vh;
    margin-inline-end: 5px;
`
const ScoreRange = styled.h2`
    font-family: 'Rubik Dirt';
    font-size: 20px;
    text-align: center;
    margin-block-start: 0px;
    margin-inline-end: 5px;
`
const PageTitle = styled.h1`
    font-family: 'Rubik Dirt';
    font-size: 4vh;
    text-align: center;
    margin-block-start: 1vh;
    margin-block-end: 1vh;
`
const TotalScoreContainer = styled.div`
    background-color: #0A1128;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-bottom: 2.5vw;
    color: white;
    border-radius: 10px;
    padding: 1vh;

`
const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 3vh;
    border: 1px solid #F7EDE2;
    box-shadow: 5px 5px 5px 5px #0F6B59 ;
    padding: 8vh;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`

const DivSpacer = styled.div`
    background-color: #0A1128;
    width: 30vw;
    border-radius: 10px;
    height: .5vh;
    margin: 7vh;
`