import styles from "./Header.module.css";
import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Header() {
    return (
        <nav className={styles.header}>
            <Container>
                <Row>                    
                    <Col xs={6} md={4}>
                        <Image src="nail-design/src/images/unha-2.jpg" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Header;