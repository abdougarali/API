import React from 'react'
import { Button,Card,ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const UsersCards = ({users}) => {
  return (
    <div>
    <Card style={{ width: '18rem', marginTop:'4%' }}>
      <Card.Header>Name : {users.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Email:{users.email}</ListGroup.Item>
        <ListGroup.Item>City:{users.address.city}</ListGroup.Item>
        <ListGroup.Item>Lng:{users.address.geo.lng}</ListGroup.Item>
        <ListGroup.Item>Company:{users.company.name}</ListGroup.Item>
      </ListGroup>
     <Link to={`/user/${users.id}`}><Button variant="secondary" >More Details</Button></Link> 
    </Card>
    </div>
  )
}

export default UsersCards