import styles from "./Container.module.css"

function Container() {
    return (
        <section className={styles.container}>
            <h2 className="h2seja">SEJA</h2><span className="h2bemvinda">BEM VINDA!</span>
            <p>O studio Camila Perini Nail Designer é especializado em serviços de Alongamento de unhas em gel, banho de gel, blindagem e manicure e pedicure tradicional.</p>
        </section>
    );
}

export default Container;