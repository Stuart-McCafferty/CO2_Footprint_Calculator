import React from 'react';
import UserTable from '../components/UserTable';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserContainer = ({users}) => {
    const transportScores = users.map((user)=> {
        return (
          user.TransportScores
        )
    })

    const foodScores = users.map((user)=> {
      return (
        user.FoodScores
      )
  })

  const travelScores = users.map((user)=> {
    return (
      user.TravelScores
    )
  })

  const userNames = users.map((user)=> {
    return (
      user.FirstName
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
            text: 'Co2 emissions'
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
        data: transportScores
    }, {
        name: 'Food',
        data: foodScores
    }, {
        name: 'Travel',
        data: travelScores
    }]
    };
    
  return (
    <div>
        <h1>User Table</h1>
          <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
        </div>
    </div>
  )
}

export default UserContainer