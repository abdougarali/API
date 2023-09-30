import React, { useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import UserCard from '../component/UserCard';
   const UserDetails = () => {
    const {id}=useParams();
    const[details,setDetails]=useState({});
    const getusersDetails = async()=>{
     try {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setDetails(response.data)
        // console.log('fetchdata : ',response.data)
     } catch (error) {
        console.log(error)
     }
 }
      useEffect(()=>{
      getusersDetails();
     },[]);

  return (
    <div>
      <UserCard details={details}/>
    </div>
  )
}

export default UserDetails