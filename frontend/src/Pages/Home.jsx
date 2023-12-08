import React, { useEffect, useState } from 'react'
import Second from '../Components/Second'
import First from '../Components/First'
import Third from '../Components/Third'
import axios from 'axios'
const Home = () => {
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
    <div>
        <First/>
        <Second data={data}/>
        <Third/>
    </div>
  )
}

export default Home