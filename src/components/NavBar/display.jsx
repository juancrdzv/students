import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Display = () => {
    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">School</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Add student</Nav.Link>
            <Nav.Link as={Link} to="/students">All students</Nav.Link>
        </Nav>
    </Navbar>);
};

export default Display;