import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Users from './pages/Users'
import { Route,Routes } from 'react-router-dom' 
import UserDetails from './pages/UserDetails'
const App = () => {
const [users,setUsers]=useState([]);
 const getusersdata = async()=>{
   try {
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(response.data)
    setUsers(response.data);
   } catch (error) {
    console.log(error)
   } 
 }
 useEffect(()=>{
  getusersdata();
 },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Users users={users}/>}/>
        <Route path="/user/:id" element={<UserDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App