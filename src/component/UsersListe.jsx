import React from 'react'
import UsersCards from './UsersCards'

const UsersListe = ({users}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
   {users.map((el)=><UsersCards key={el.id} users={el}/>)}
    </div>
  )
}

export default UsersListe