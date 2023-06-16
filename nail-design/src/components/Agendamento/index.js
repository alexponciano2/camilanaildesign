import styles from "./Agendamento.module.css"
import { FaWhatsapp } from 'react-icons/fa'

function Agendamento() {
    return(
        <section className={styles.agendamento}>
            <h1>FAÇA UM AGENDAMENTO</h1>
            <a target="_blank" href="https://wa.me/5527997651972"><button type="text">AGENDAR HORÁRIO</button></a>
            <span className={styles.social}><FaWhatsapp/></span>
        </section>
    );
}

export default Agendamento;