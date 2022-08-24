import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
const ImprovementContainer = () => {
    const location = useLocation();
    const data = location.state
    console.log(data)
    const [totalChange, setTotalChange] = useState(0);


    // TRANSPORT
    // Set/Get variables
    const [transportChange, setTransportChange] = useState(0);
    let transportText = ""
    let transportText2 = ""
    let transportPicked = ""
    const transportValue = data.get('Transport')
    let transportCounter = 0;
    console.log(transportValue)
    // If statement to figure out what transport they used
    // Just realised I could have made a dictionary and accessed that... fml
    if (transportValue === 470){
        transportPicked = "Car"
    } else if (transportValue === 135){
        transportPicked = "Bus"
    } else if (transportValue === 88){
        transportPicked = "Train"
    } else {
        transportPicked = "Walking/Cycling"
    }
    //Handle onClick
    const handleClick = (parameter) => (event) => {
        setTransportChange(transportValue - parameter);
        setTotalChange(totalChange + transportChange);
        

    }
    //Output
    function transport(){
        if (transportValue > 87){
            return (
                <>
                <p>Oh no...Your mode of transport is the {transportPicked}, this releases {transportValue} kg of CO² per year</p>
                <p>You could decrease your CO2 emissions by Walking or Cycling</p>
                <button onClick={handleClick(0)}>Walking/Cycling</button>
                <button onClick={handleClick(88)}>Train</button>
                <button onClick={handleClick(135)}>Bus</button>
                <button onClick={handleClick(470)}>Car</button>
                </>
                )
        } else {
            transportText = `WOW, You are a climate hero!`
            transportText2 = `Walking is the best mode of transport, it produces no CO2 emissions!`
        }
    }

    // FOOD

    // 
    


    return (
        <>
        <h1>Promised change total: {transportChange} kg of CO² per year</h1>
        <hr/>
        <h2>Transport - Promised change to transport: {transportChange} kg of CO² per year</h2>
        <p>{transportText}</p>
        <p>{transportText2}</p>
        {{transportValue} ? transport() : null}
        <hr/>


        </>
        

    )
}

export default ImprovementContainer