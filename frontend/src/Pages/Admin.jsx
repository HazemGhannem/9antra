import React from 'react'
import NavBar from '../Components/NavBar'
import { Col, Container, Row } from 'react-bootstrap'
import FormAdd from '../Components/FormAdd'

const Admin = () => {
  return (
    <>
        <NavBar />    
        <Container>
        <Row>
            <Col md={3}>
            <FormAdd />
            </Col>
        </Row>
        </Container>
    </>
  )
}

export default Admin