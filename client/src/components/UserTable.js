import React from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserTable = ({user}) => {
    
  return (
    <div>
        <p>{user.firstName} {user.transportScore} {user.foodScore} {user.travelScore}</p>
    </div>
  )
}

export default UserTable;