import React from 'react'
import { Card,Button,ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({details}) => {
    console.log('data',details)
  return (
    <div>
     
      {/* {details.address.city}
      {details.company.bs}
      {details.website}
      {details.phone}
      <h2>{details.email}</h2>
      <h2>{details.name}</h2>
     <Link to="/"><button>get back</button></Link>  */}
    <Card style={{ width: '18rem' }}>
      {/* <Card.Header>{details.company.name}</Card.Header> */}
        <ListGroup variant="flush">
        <ListGroup.Item>{details.name}</ListGroup.Item>
        <ListGroup.Item>{details.email}</ListGroup.Item>
        {/* <ListGroup.Item>{details.address.city}</ListGroup.Item> */}
        <ListGroup.Item>{details.phone}</ListGroup.Item>
        <ListGroup.Item>{details.website}</ListGroup.Item>
      </ListGroup>
      <Link to="/"><Button>Get Back</Button></Link>
    </Card>
    </div>
  )
}

export default UserCard