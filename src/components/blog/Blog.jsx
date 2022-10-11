import './blog.css';
import React, {useState, useEffect} from 'react';
import { Data } from './Data';
import AnimatedLetters from '../animatedLetters/AnimatedLetters';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Blog = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
  return (
    <section className="blog container section" id='blog'>
        <h2 className="section__title">
        <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'B', 'l', 'o', 'g', 's']}
            idx = {15}
            />
        </h2>
        <span className="section__subtitle"></span>

        <Swiper className="blog__container"
          // loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
            {Data.map(({id, image, title, description}) => {
                return (
                  <SwiperSlide className="blog__card" key={id}>
                    <a href=''>
                      <div className="image__section">
                        <img src={image} alt=""
                        className='blog__img' />
                        <div className="image__overlay image__overlay--blur">
                          <div className="text">Read Blog</div>
                        </div>
                      </div>
                      <h3 className="blog__name">{title}</h3>
                      </a>
                      <p className="blog__description">{description}</p>
                  </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Blog;