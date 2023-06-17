import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import unha02 from '../BannerSlick/images/unha02.jpg';
import unha03 from '../BannerSlick/images/unha03.jpg';
import unha04 from '../BannerSlick/images/unha04.jpg';
import unha05 from '../BannerSlick/images/unha05.jpg';
import unha06 from '../BannerSlick/images/unha06.jpg';
import unha07 from '../BannerSlick/images/unha07.jpg';
import unha08 from '../BannerSlick/images/unha08.jpg';
import unha09 from '../BannerSlick/images/unha09.jpg';
import unha10 from '../BannerSlick/images/unha10.jpg';
import unha11 from '../BannerSlick/images/unha11.jpg';
import styles from './BannerSlick.module.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={styles.geral} style={{ display: 'block', width: "100%" }}>
            <Carousel fade pause="hover" touch>
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha02}
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha03}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha04}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha05}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha06}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha07}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha08}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha09}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha10}
                        alt="Image Two"
                    />
                </Carousel.Item>
                {/* ----------------------------------------------------------------------- */}
                <Carousel.Item interval={1500}>
                    <img
                        className={styles.carousel}
                        src={unha11}
                        alt="Image Two"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;