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
            <img src={logo} alt="cnd" className="logo"/>
        </div>

        <div>
            <img src={whatsapp} alt="wa" className={styles.whatsapp}/>
        </div>

        <div>
            <img src={instagram} alt="ig" className={styles.instagram}/>
        </div>

        <div>
            <img src={facebook} alt="fb" className={styles.facebook}/>
        </div>
        </>
    );
}

export default Header;