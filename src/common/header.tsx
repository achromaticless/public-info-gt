import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    &nbsp;<Link to="/">Open Info GT</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">¿What is?</Nav.Link>
                        <Nav.Link href="/form">Request information</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}