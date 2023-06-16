import styles from "./FotoCamila.module.css";
import React from "react";
import fotocamila from '../FotoCamila/fotocamila3.png'

function FotoCamila() {
    return (
        <>
        <div className={styles.fotocamila}>
            <img src={fotocamila} alt="foto camila" className="foto"/>
        </div>
        </>
    );
}

export default FotoCamila;