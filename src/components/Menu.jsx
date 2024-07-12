import { Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

import imagem from "../assets/logo-branca.png";

function Menu() {
    return(
        <header>
            <Navbar className="custom-navbar" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/"> <img src={imagem} alt="imagem logo crea-jr" width="200" /></Link>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">HOME</Link>
                            <Link className="nav-link" to="/sobrenos">SOBRE-NÓS</Link>
                            <Link className="nav-link" to="processoseletivo">PROCESSO SELETIVO</Link>
                            <Link className="nav-link" to="/eventos">EVENTOS</Link>
                            <Link className="nav-link" to="/login">LOGIN</Link>
                            <Link className="nav-link" to="/cadastro">CADASTRO</Link>
                            <Link className="nav-link" to="/contato">CONTATO</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;