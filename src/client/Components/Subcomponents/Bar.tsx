import * as React from 'react'; 
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

const Bar: React.FC<BarProps> = () => {
    return (
        <Navbar style={{background: 'white'}} className="nav p-2 shadow">
            <NavbarBrand href="/">B O U N C E</NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
            <Nav className="mr-auto">
                <Nav.Link href="/" style={{ textDecorationLine: "none" }} className="py-2 mx-2 text-primary">Home</Nav.Link>
                <Nav.Link href="/post" style={{ textDecorationLine: "none" }} className="py-2 mx-2 text-primary">Form</Nav.Link>
            </Nav>
        </Navbar>
    )
}

interface BarProps {}; 

export default Bar; 

