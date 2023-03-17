import React, { Fragment } from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'

class Topnavbar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className='bg-warning shadow-sm mb-3' sticky= "top" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href='/'>
                            <img alt="" src="\images\pet-house.png" width="30" height="30"/> {' '}
                            Pet Shop YUKI
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <div className='navbar-nav mr-auto'>
                                <il className="nav-item">
                                    <NavLink to='/' className='nav-link'>Home</NavLink>
                                </il>
                                <il className="nav-item">
                                    <NavLink to='/about' className='nav-link'>About</NavLink>
                                </il>
                            </div>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}
export default Topnavbar