import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import CardsMenu from '../Components/CardsMenu'
import NavBar from '../Components/NavBar'

const GetMenus = () => {
        const[data,setData]=useState([])
    useEffect(() => {
        const getAll=async ()=>{
            await axios.get("http://localhost:5000/api/products")
            .then(res=>{
                setData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        getAll()
    }, [data])
    
  return (
    <>
    <NavBar></NavBar>
    <Row className='py-8'>
    {
        data.map((menu)=>
         <Col md={3} className='py-4' key={menu._id}>    
         <CardsMenu  menu={menu}/>
         </Col>
        )
    }
    </Row>
    </>
  )
}

export default GetMenus