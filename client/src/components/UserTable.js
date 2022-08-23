import React from 'react'

const UserTable = ({user}) => {
    
  return (
    <div>
        <p>{user.name} {user.location} {user.score}</p>
    </div>
  )
}

export default UserTable;