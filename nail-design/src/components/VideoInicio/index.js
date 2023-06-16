import { Container } from 'react-bootstrap';
import styles from './VideoInicio.module.css'

function Video(){
    return(
        <Container className={styles.videoinicio}>
            <div className="ratio ratio-16x9">
                <iframe width="451" height="801" src="https://www.youtube.com/embed/wD0AnnHNYSo" title="Studio Camila Perini Nail Designer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </Container>
    );
}

export default Video;