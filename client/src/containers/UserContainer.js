import React from 'react';
import { Link } from "react-router-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

const UserContainer = ({users}) => {
  
  function refreshPage() {
    window.location.reload(false);
  }

    const transportTotal = users.map((user)=> {
        return (
          user.transportScore
        )
    })

    const foodTotal = users.map((user)=> {
      return (
        user.foodScore
      )
  })

  const travelTotal = users.map((user)=> {
    return (
      user.travelScore
    )
  })

  const userNames = users.map((user)=> {
    return (
      user.firstName
    )
  })

    const options = {
      chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: userNames
    },
    yAxis: {
        min: 0,
        title: {
            text: 'C02 emissions in kgs'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Transport',
        data: transportTotal
    }, {
        name: 'Food',
        data: foodTotal
    }, {
        name: 'Travel',
        data: travelTotal
    }]
    };
    
  return (

    <>
            <HeaderContainer>
            <H1>USER SCORES</H1>
            <Para>These are the scores of other users in your area</Para>
              <Button onClick = {refreshPage}>See how you compare to other users</Button>
            </HeaderContainer>
            <GraphContainer>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
            </GraphContainer>
          <ButtonContainer>
          <Link to="/">
            <Button>
              Retake Test!
            </Button>
          </Link>
          </ButtonContainer>
          </>
  )
}


const HeaderContainer = styled.div`
  padding-top: 30px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const H1 = styled.h1`
    font-family: 'Covered By Your Grace';
    font-family: 'Rubik Dirt';
    display: flex;
    align-items: center;
`

const Para = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
`

const ButtonContainer = styled.div`
    padding-left: 150px;
    padding-right: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Button = styled.button`
    background-color: #1AB394;
    color: white; 
    border-radius: 5px;
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`

const GraphContainer = styled.div`
    background-color: white;
    margin-left: 100px;
    margin-right: 100px;
    border: solid 1px #F7EDE2;
    box-shadow: 5px 5px 5px 5px #0F6B59;
`

export default UserContainer