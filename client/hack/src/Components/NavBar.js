import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavLink from 'react-bootstrap/esm/NavLink';
import Button from 'react-bootstrap/Button'
const NavBar = () => {
    return (
        <Navbar>
            <Container>
            <NavLink to="/">
                Абоба
            </NavLink>
            <Button variant='outline-light'></Button>
            </Container>
        </Navbar>

    );
};

export default NavBar;