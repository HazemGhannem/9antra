import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'

const Details = () => {
    const[menu,setMenu]=useState({})
    const navigate=useNavigate()
    const {id} =useParams()
    const deleteMenu=async ()=>{
        if (window.confirm("Are you sure?")) {
          await axios.delete(`http://localhost:5000/api/products/${menu._id}`).catch(err=>{
          console.log(err)
        })
        }
        
    }
    useEffect(() => {
        const get=async()=>{
            await axios.get(`http://localhost:5000/api/products/${id}`).then(res=>{
                setMenu(res.data)
            }).catch(e=>{
                console.log(e)
            })
        }
        get()
    }, [])
    
  return (
    <>
    <NavBar></NavBar>
    <Container className='py-8'>
        <Row>
            <Col>
            <Image src={menu.image} fluid />;
            </Col>
            <Col className="flex flex-col py-6">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                    <td className='font-bold text-lg'>Title: {menu.title}</td>
                    </tr>
                    <tr>
                    <td className='font-bold text-lg'>Prix: {menu.price} DT</td>
                    </tr>
                </tbody>
            </Table>
            <Button className='bg-red w-40' onClick={deleteMenu} variant='danger'>Delete</Button>
            <Button className='bg-blue w-40 mt-2' onClick={()=>{navigate(`/update/${menu._id}`)}} variant='info'>Update</Button>
            </Col>
        </Row>
        
       

    </Container>
    </>
  )
}

export default Details