import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/data")
    }
    const handle=()=>{
        navigate("/admin")
    }
    const loadpage=()=>{
        navigate("/")
    }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={loadpage}>Home</Nav.Link>
        <Nav.Link onClick={handleClick} >Data</Nav.Link>
        <Nav.Link onClick={handle}>Admin</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar