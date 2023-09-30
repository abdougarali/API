import React from 'react'
import UsersListe from '../component/UsersListe'
const Users = ({users}) => {
  return (
    <div>
  <UsersListe users={users}/>
    </div>
  )
}

export default Users