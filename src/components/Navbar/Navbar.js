import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './Navbar.module.css';

function Navigation() {
  return (
    <Navbar className={classes.navbar} expand="lg" sticky="top">
      <Container className={classes.navigation}>
        <div>
          <Navbar.Brand href="#home">
            <img
              className={classes.logo}
              src="https://i.ibb.co/wr62C4q/Aqmeter-Logo-Small-White.png"
              alt="Logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={classes.navLink} href="#home">
                Home
              </Nav.Link>
              <Nav.Link className={classes.navLink} href="#link">
                Tutorials
              </Nav.Link>
              <Nav.Link className={classes.navLink} href="#link">
                Help
              </Nav.Link>
              <Nav.Link className={classes.navLink} href="#link">
                FAQ
              </Nav.Link>
              <Nav.Link className={classes.navLink} href="#link">
                Contact
              </Nav.Link>
              <Nav.Link
                className={(classes.navLink, classes.login)}
                href="#link"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
