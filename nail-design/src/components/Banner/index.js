import styles from "./Banner.module.css"
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import image2 from '../BannerSlick/images/unha02.jpg'
import image3 from '../BannerSlick/images/unha03.jpg'
import image4 from '../BannerSlick/images/unha04.jpg'
import image5 from '../BannerSlick/images/unha05.jpg'
import image6 from '../BannerSlick/images/unha06.jpg'
import image7 from '../BannerSlick/images/unha07.jpg'
import image8 from '../BannerSlick/images/unha08.jpg'
import image9 from '../BannerSlick/images/unha09.jpg'
import image10 from '../BannerSlick/images/unha10.jpg'
import image11 from '../BannerSlick/images/unha11.jpg'

const images = [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

function Banner() {
  
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <div className={styles.banner}>

        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: - width }}
            
          >

            {images.map(image => (
              <motion.div className='item' key={image}>
                <img src={image} alt="Texto alt" />
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div >  
  );
}

export default Banner;