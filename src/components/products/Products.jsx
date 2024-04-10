import React from 'react'
import './products.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

const Products = () => {
  return (
    <>
        <section className='section-products'>
            <div className="conteiner-products">
                <Swiper
                slidesPerView={3}
                grid={{
                  rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper">

                <SwiperSlide className='swiper-yo'>Slide 1</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 3</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 4</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 5</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 6</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 7</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 8</SwiperSlide>
                <SwiperSlide className='swiper-yo'>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  )
}

export default Products