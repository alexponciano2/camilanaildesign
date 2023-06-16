import styles from "./VerMais.module.css"
import whatsapp from '../Header/whatsapp.png'
import instagram from '../Header/instagram.png'
import facebook from '../Header/facebook.png'

function VerMais() {
    return (
        <section className={styles.vermais}>

            <h2>SIGA NOSSAS REDES SOCIAIS:</h2>

            <section className={styles.socialmedia}>
                <div>
                    <a target="_blank" href="https://wa.me/5527997651972"><img src={whatsapp} alt="wa" className={styles.whatsapp} /></a>
                </div>

                <div>
                    <a target="_blank" href="https://www.instagram.com/camilaperini.nails/"><img src={instagram} alt="ig" className={styles.instagram} /></a>
                </div>

                <div>
                    <a target="_blank" href="https://www.facebook.com/camilaperini.nails"><img src={facebook} alt="fb" className={styles.facebook} /></a>
                </div>
            </section>

            

        </section>
    );
}

export default VerMais;