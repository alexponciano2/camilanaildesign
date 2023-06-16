import styles from './Contato.module.css'
import map from '../VerMais/map.png'


function Contato() {
    return (
        <>
            <div className={styles.contato}>
                <p>ENDEREÇO:<br/> Avenida Retiro dos Ananás, 59<br/>Morada do Ribeirão<br/>São Mateus - ES</p>
            </div>
                <a target="_blank" href="https://goo.gl/maps/zqGDT3BrJWw7V2Fx8"><img src={map} alt="fb" className={styles.map} /></a>
                

            <div>
            </div>

            <div className={styles.mapa}>
                <p className={styles.p}>CONTATO:<br/> (27) 99765-1972</p>
            </div>

            <section className={styles.agendamento}>
            <a target="_blank" href="https://wa.me/5527997651972"><button type="text">AGENDAR</button></a>
        </section>
        </>
    );
}

export default Contato;