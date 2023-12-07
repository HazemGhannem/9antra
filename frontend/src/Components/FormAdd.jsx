import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Loader from './Loader'
import { Navigate, useNavigate } from 'react-router-dom'

const FormAdd = () => {
  const[uploading,setUploading]=useState(false)
  const navigate=useNavigate()
    const[menu,setMenu]=useState({
        title:"",
        price:0,
        image:"",
    })
    const add =async()=>{
      await axios.post('http://localhost:5000/api/products',menu).then(res=>{
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
      <Button style={{backgroundColor:"blue"}} onClick={add}>Add</Button>
    </Form>
  )
}

export default FormAdd