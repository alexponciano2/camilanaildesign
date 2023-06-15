import styles from "./Services.module.css"

function Services() {
    return (
        <>
            <section className={styles.services}>
                <h1 className="servicos">NOSSOS <strong>SERVIÇOS</strong></h1>
            </section>
            
            <section className={styles.services}>
                <div className={styles.bg1}>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">ALONGAMENTO EM GEL</h2>
                    </div>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">BANHO EM GEL</h2>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.bg2}>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">BLINDAGEM MÃOS E PÉS</h2>
                    </div>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">MANUTENÇÃO EM GEL</h2>
                    </div>
                </div>                
            </section>

            <section className={styles.services}>
                <div className={styles.bg3}>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">MANICURE E PEDICURE TRADICIONAL</h2>
                    </div>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">ESMALTAÇÃO EM GEL</h2>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.bg4}>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">CUTILAGEM SEM ESMALTAÇÃO</h2>
                    </div>
                    <div className={styles.alongamento}>
                        <h2 className="servh2">NAIL ART</h2>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Services;