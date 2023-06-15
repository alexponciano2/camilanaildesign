import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.navbrand} href="#menu">MENU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.meauto}>
            <Nav.Link href="#inicio">INÍCIO</Nav.Link>
            <Nav.Link href="#studio">STUDIO</Nav.Link>
            <Nav.Link href="#servicos">SERVIÇOS</Nav.Link>
            <Nav.Link href="#videos">VÍDEOS</Nav.Link>
            <Nav.Link href="#feedback">FEDBACK</Nav.Link>
            <Nav.Link href="#contato">CONTATO</Nav.Link>            
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;