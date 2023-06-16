import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaWhatsapp } from 'react-icons/fa'
import logo from "../Header/logo2.png"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <h3>Studio Camila Perini Nail Designer</h3>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/camilaperini.nails">
                        <FaFacebook />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/camilaperini.nails/">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.me/5527997651972">
                        <FaWhatsapp />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://goo.gl/maps/wpGMNvYnKCZyKDMB9">
                        <FaMapMarked />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>Alex Ponciano - &copy; 2023</p>
        </footer>
    );
}

export default Footer;