import React from 'react'
import style from './style.module.css'
import slid1 from '../../assets/banner-4.jpeg'
import slid2 from '../../assets/blog-img-1.jpeg'
import slid3 from '../../assets/blog-img-2.jpeg'
import Slider from 'react-slick'

export default function MainSlide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mt-4">
        <Slider {...settings}>
          <img src={slid1} className={style.bghig} alt="" />
          <img src={slid2} className={style.bghig} alt="" />
          <img src={slid3} className={style.bghig} alt="" />
        </Slider>
      </div>
    </>
  )
}
