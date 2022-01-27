import { Navbar, Container, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function Header() {
    const { t } = useTranslation();
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    &nbsp;Open Info GT
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">{t('what_is')}</Nav.Link>
                        <Nav.Link href="/form">{t('request_information')}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}