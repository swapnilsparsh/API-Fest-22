import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/Community.png'

import { Navbar, Container,  Nav } from 'react-bootstrap'; 

const useStyles = makeStyles((theme) => ({
logo:{
    width: '100px',
    height: '80px',
    marginLeft: '70px',
    marginTop: '-10px'
},
 headerSearch: {
     fontSize:'15px',
     marginRight: '40px',
 },
 search:{
     width:'12px',
     marginTop:'-5px'
 },
 help: {
     marginRight: '40px',
     fontSize:'15px',
 },
 account: {
     marginRight: '40px',
     fontSize:'15px',
 },
 shop: {
     marginRight: '20px'
 },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="none" variant="dark" color="white">
  <Container>
  <Navbar.Brand> <a href="/"><img className={classes.logo} src={logo} alt="" /></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" />
    <Nav>
      <Nav.Link href=""  className={classes.headerSearch}>Home</Nav.Link>
      <Nav.Link  className={classes.help}> Communities </Nav.Link>
      <Nav.Link  className={classes.account}> Login </Nav.Link>
      {/* <Nav.Link > <img className={classes.shop} src={shop} alt="" /> </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}