import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topMeels } from './topMeel';  // Ensure this is correctly named
import { CarouselItem } from './CarouselItem';

const MultiitemCarosel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false
      };
  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item, index) => (  // Use consistent naming
                <CarouselItem key={index} image={item.image} title={item.title} />  // Corrected property name
            ))}
        </Slider>
    </div>
  );
};

export default MultiitemCarosel;
