import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="mainmenu">
              <div className="logo">
                <h1>RESTAURANT REACTJS</h1>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link></Nav.Link>
              <Nav.Link>
                <Link to="/menu" className="mainmenu">
                  Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about" className="mainmenu">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact" className="mainmenu">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
