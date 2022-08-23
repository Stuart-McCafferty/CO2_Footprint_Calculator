import React from 'react';
import UserTable from '../components/UserTable';

const UserContainer = ({users}) => {
    const userList = users.map((user)=> {
        return (
            <UserTable user={user} key={user._id}/>
        )
    })
  return (
    <div>
        <h1>User Table</h1>
        <>{userList}</>
    </div>
  )
}

export default UserContainer