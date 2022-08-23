import React from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserTable = ({user}) => {
    
  return (
    <div>
        <p>{user.FirstName} {user.TransportScore} {user.FoodScore} {user.TravelScore}</p>
    </div>
  )
}

export default UserTable;