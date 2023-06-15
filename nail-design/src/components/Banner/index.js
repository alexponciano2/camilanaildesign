import styles from "./Banner.module.css"
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import image1 from '../../../src/images/unha-1.png'
import image2 from '../../../src/images/unha-2.jpg'
import image3 from '../../../src/images/unha-3.jpg'
import image4 from '../../../src/images/unha-4.jpg'
import image5 from '../../../src/images/unha-5.jpg'
import image6 from '../../../src/images/unha-6.jpg'
import image7 from '../../../src/images/unha-7.jpg'
import image8 from '../../../src/images/unha-8.jpg'
import image9 from '../../../src/images/unha-9.png'
import image10 from '../../../src/images/unha-10.jpg'
import image11 from '../../../src/images/unha-11.jpg'
import image12 from '../../../src/images/unha-12.jpg'
import image13 from '../../../src/images/unha-13.jpg'
import image14 from '../../../src/images/unha-14.jpg'
import image15 from '../../../src/images/unha-15.jpg'
import image16 from '../../../src/images/unha-16.jpg'
import image17 from '../../../src/images/unha-17.jpg'
import image18 from '../../../src/images/unha-18.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18,]

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