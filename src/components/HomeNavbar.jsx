import {Nav, Button, Navbar} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Products from './Products';
import { ImportContacts } from '@material-ui/icons';

  class HomeNavbar extends Component {
    render(){
  return(
<div>  
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Navbar.Brand href='/'>Bill Helper</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/products'>Products</Nav.Link>
      <Nav.Link href='/bundles'>Bundles</Nav.Link>
      <NavDropdown title="Add" id="collasible-nav-dropdown">
        <NavDropdown.Item href='/product'>Product</NavDropdown.Item>
        <NavDropdown.Item href='/bundle'>Bundle</NavDropdown.Item>
        <NavDropdown.Item href='/detail'>Details</NavDropdown.Item>
     
        </NavDropdown>
        </Nav>
    <Nav>
      <Nav.Link href="/about">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>    
  
  <div>
    <Router>
    <Route path='/'  component={HomeNavbar} />
    <Route exact path='/products'  component={Products} />
  </Router>
  </div>
  </div>
  
  );
}}

export default HomeNavbar;