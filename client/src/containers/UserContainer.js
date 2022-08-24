import React from 'react';
import UserTable from '../components/UserTable';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

const UserContainer = ({users}) => {
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
        text: 'See how you compare to other users'
    },
    xAxis: {
        categories: userNames
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Co2 emissions in kgs'
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
    <div>
          <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
        <div>
          <Link to="/">
            <Button>
              Retake Test!
            </Button>
          </Link>
          
          <Link to="/improvements">
            <Button>
              Improve Your Score!
            </Button>
          </Link>
          </div>
    </div>
  )
}

const Button = styled.button`
    background-color: #1AB394;
    color: white; 
    border-radius: 5px;
    padding: 5px;
`

export default UserContainer