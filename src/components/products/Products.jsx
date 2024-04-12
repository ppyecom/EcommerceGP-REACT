import React from 'react'
import './products.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import FetchProductsGet from '../hooks/products/FetchProductsGet';
import ProductsCard from './productsCard/ProductsCard';

const Products = () => {

  const {products, isLoading} = FetchProductsGet()

  console.log(products)
  console.log(isLoading)

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


                {products.map((product, index)=>{
                  return(
                    <SwiperSlide key={index} className='swiper-yo'>
                      <ProductsCard key={index} {...product}/>
                    </SwiperSlide>
                  )
                })}
                </Swiper>
            </div>
        </section>
    </>
  )
}

export default Products