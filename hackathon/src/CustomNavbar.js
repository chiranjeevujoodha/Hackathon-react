import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">BetterTomorrow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/campaigns">Campaigns</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className='justify-content-end'>
            <Nav.Link href="/signin">Sign-In</Nav.Link>
            <Nav.Link href="/signup">Sign-Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;