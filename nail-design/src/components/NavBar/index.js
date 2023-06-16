import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
        <Container>
          <Nav className={styles.meauto}>
            <Nav.Link href="#servicos">SERVIÇOS</Nav.Link>
            <Nav.Link href="#agenda">AGENDA</Nav.Link>
            <Nav.Link href="#contato">CONTATO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;