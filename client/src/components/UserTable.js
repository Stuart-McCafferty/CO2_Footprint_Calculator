import React from 'react'

const UserTable = ({user}) => {
    
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.location}</p>
        <p>{user.score}</p>
    </div>
  )
}

export default UserTable;