import React from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserTable = ({user}) => {
    
  return (
    <div>
        <p>{user.name} {user.location} {user.score}</p>
    </div>
  )
}

export default UserTable;