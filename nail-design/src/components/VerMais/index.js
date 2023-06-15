import styles from "./VerMais.module.css"

function VerMais() {
    return (
        <section className={styles.vermais}>
            <button className={styles.button} type="text">VEJA MAIS</button>
            <h2>SIGA NOSSO INSTAGRAM: <a href="https://www.instagram.com/camilaperini.nails/">@camilaperini.nails/</a></h2>
        </section>
    );
}

export default VerMais;