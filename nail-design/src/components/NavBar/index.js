import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./NavBar.module.css";
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function NavBar() {
  return(
    <div className={styles.navbar}>
        <AnchorLink href='#servicos'>SERVIÇOS</AnchorLink>
        <AnchorLink href='#agenda'>AGENDA</AnchorLink>
        <AnchorLink href='#endereco'>ENDEREÇO</AnchorLink>
        <AnchorLink href='#contato'>CONTATO</AnchorLink>
    </div>
);
}

export default NavBar;