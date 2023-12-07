import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import NavBar from '../Components/NavBar'

const Update = () => {
    const[uploading,setUploading]=useState(false)
    const navigate=useNavigate()
    const{id}=useParams()
    
          const[menu,setMenu]=useState({})
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

    const update=async()=>{
        await axios.put(`http://localhost:5000/api/products/${id}`,menu).then(res=>{
            setMenu(res.data)
            navigate("/data")
        }).catch(e=>{
            console.log(e)
        })
    }
      const uploadFileHandler = async(e) =>{
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image',file)
        setUploading(true)
        try{
        const config ={
        headers:{
        'Content-Type':'multipart/form-data'
        }
        }
        const {data} =  await axios.post('http://localhost:5000/api/upload',formData,config)
      
        setMenu({...menu,image:data})
        setUploading(false)
        }catch(error){
          console.error(error)
          setUploading(false)
        }
      }
    return (
        <>
        <NavBar />
        <Container>
        <Row>
            <Col md={3}>
      <Form className='py-8' >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="title" value={menu.title} onChange={(e)=>setMenu({...menu,title : e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="price" value={menu.price} onChange={(e)=>setMenu({...menu,price : e.target.value})} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control name='image' type="file" accept="image/png, image/jpg, image/jpeg"  
          onChange={uploadFileHandler} 
          />
          {uploading && <Loader></Loader>}
        </Form.Group>
        <Button style={{backgroundColor:"blue"}} onClick={update}>Update</Button>
      </Form>
      </Col>
      </Row>
        </Container>
      </>
    )
  }

export default Update