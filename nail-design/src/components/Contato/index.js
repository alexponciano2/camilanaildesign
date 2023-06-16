import styles from './Contato.module.css'

function Contato() {
    return (
        <>
            <div className={styles.contato}>
                <p>ENDEREÇO:<br/> Avenida Retiro dos Ananás, 59 - Morada do Ribeirão, São Mateus - ES</p>
            </div>

            <div className={styles.mapa}>
                <p className={styles.p}>CONTATO:<br/> (27) 9765-1972</p>
            </div>

            <section className={styles.agendamento}>
            <a target="_blank" href="https://wa.me/5527997651972"><button type="text">AGENDAR HORÁRIO</button></a>
        </section>
        </>
    );
}

export default Contato;