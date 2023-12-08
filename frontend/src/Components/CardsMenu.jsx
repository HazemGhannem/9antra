import axios from 'axios'
import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CardsMenu = ({menu}) => {
  const navigate=useNavigate()

  const deleteMenu=async ()=>{
      if (window.confirm("Are you sure?")) {
        await axios.delete(`http://localhost:5000/api/products/${menu._id}`).catch(err=>{
        console.log(err)
      })
      }
      
  }
  const showDetail=()=>{
    navigate(`/detail/${menu._id}`)
  }

  return (
    <>
      
      <Container className='px-14'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={menu.image}  className='h-[320px] w-full'/>
      <Card.Body>
        <Card.Title>{menu.title}</Card.Title>
        <Card.Text>
        {menu.price}
        </Card.Text>
        <div className="flex justify-around py-2">
        <Button style={{backgroundColor:"red"}} onClick={deleteMenu} variant="danger">Delete</Button>
        <Button style={{backgroundColor:"yellow"}} onClick={showDetail} variant="info">Details</Button>
        </div>
      </Card.Body>
      </Card>
      </Container>
    </>
  )
}

export default CardsMenu