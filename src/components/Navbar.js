import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import placeholderImage from '../Logo.png';
import { Outlet } from 'react-router-dom';

function CustomNavbar() {
    return (
        <>
            <Navbar className="custom-navbar" expand="lg">
                <Container className="d-flex justify-content-center">
                    <Navbar.Brand className="d-flex align-items-center">
                        <img src={placeholderImage} width="70" height="70" className="d-inline-block align-top ms-2" alt="placeholder" style={{ borderRadius: '50%' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto"> 
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/About'>About Me</Nav.Link>                            
                            <NavDropdown title="What I offer" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
                                <NavDropdown.Item href="/Services">Services</NavDropdown.Item>                                
                            </NavDropdown>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default CustomNavbar;