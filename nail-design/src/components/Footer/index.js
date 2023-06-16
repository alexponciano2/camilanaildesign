import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaWhatsapp } from 'react-icons/fa'
import logo from "../Header/logo2.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <h3>Studio Camila Perini<br/>Nail Designer</h3>
                </li>                
            </ul>
            <p className={styles.copy_right}>Alex Ponciano - &copy; 2023</p>
        </footer>
    );
}

export default Footer;