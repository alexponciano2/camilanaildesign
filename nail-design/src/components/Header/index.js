import styles from "./Header.module.css";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './logo2.png'
import whatsapp from './whatsapp.png'
import instagram from './instagram.png'
import facebook from './facebook.png'

function Header() {
    return (
        <>
        <div className={styles.header}>
            <a href="/"><img src={logo} alt="cnd" className="logo"/></a>
        </div>

        <div>
            <a target="_blank" href="https://wa.me/5527997651972"><img src={whatsapp} alt="wa" className={styles.whatsapp}/></a>
        </div>

        <div>
            <a target="_blank" href="https://www.instagram.com/camilaperini.nails/"><img src={instagram} alt="ig" className={styles.instagram}/></a>
        </div>

        <div>
            <a target="_blank" href="https://www.facebook.com/camilaperini.nails"><img src={facebook} alt="fb" className={styles.facebook}/></a>
        </div>
        </>
    );
}

export default Header;