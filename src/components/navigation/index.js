import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Login from '../login/login'
import Students from '../students'
import Faculty from '../faculty'
import Classes from '../classes'
import Register from '../login/registration'
import NotFound from '../notFound'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import "../../App.css"
import { DEFAULT } from '../../consts'

export default function Navigation() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">{DEFAULT.brandName}</Navbar.Brand>
                <Nav className="me-auto" activeKey={"/"}>
                    <Nav.Link as={Link} to="/students">{DEFAULT.students}</Nav.Link>
                    <Nav.Link as={Link} to="/faculty">{DEFAULT.faculty}</Nav.Link>
                    <Nav.Link as={Link} to="/classes">{DEFAULT.classes}</Nav.Link>
                    <Nav.Link as={Link} to="/">{DEFAULT.login}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>    
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path={`/${DEFAULT.students}`} element={<Students />} />
            <Route path={`/${DEFAULT.faculty}`} element={<Faculty />} />
            <Route path={`/${DEFAULT.classes}`} element={<Classes />} />
            <Route path={`/${DEFAULT.register}`} element={<Register />} />
            <Route path='*' element={<NotFound />} />
        </Routes>        
    </div>
  )
}
