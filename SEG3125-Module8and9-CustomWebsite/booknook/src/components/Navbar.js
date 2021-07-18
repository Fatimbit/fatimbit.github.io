import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

function Navbar(){
return(
<ReactBootStrap.Navbar collapseOnSelect expand="lg" > 
<ReactBootStrap.Container>
<ReactBootStrap.Navbar.Brand href="#home">Book Nook</ReactBootStrap.Navbar.Brand>
<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="me-auto">
    <ReactBootStrap.Nav.Link href="#features">Books</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link href="#pricing">Meetings</ReactBootStrap.Nav.Link>
    <ReactBootStrap.NavDropdown title="Discussion Board" id="collasible-nav-dropdown">
      <ReactBootStrap.NavDropdown.Item href="#action/3.1">option 1</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action/3.2">option 2 </ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Item href="#action/3.3">option 3</ReactBootStrap.NavDropdown.Item>
      <ReactBootStrap.NavDropdown.Divider />
      <ReactBootStrap.NavDropdown.Item href="#action/3.4">option 4</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav>
    <ReactBootStrap.Nav.Link href="#deets">Sign Up</ReactBootStrap.Nav.Link>
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
      Contact Us
    </ReactBootStrap.Nav.Link>
  </ReactBootStrap.Nav>
</ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Container>
</ReactBootStrap.Navbar>)}

export default Navbar;