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
 trans:{
     background:'transparent'
 },
 collapse:{
 background:'transparent'
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
      <>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="transparent" variant="dark" color="white">
  <Container className={classes.trans}>
  <Navbar.Brand> <a href="/"><img className={classes.logo} src={logo} alt="" /></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="transparent" />
  <Navbar.Collapse id="responsive-navbar-nav" bg="transparent">
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
</>
  );
}