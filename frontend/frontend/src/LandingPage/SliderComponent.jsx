import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../assets/slick_1.jpg'
import s2 from '../assets/slick_2.jpg'
import s3 from '../assets/slick_3.jpg'
import s4 from '../assets/slick_4.jpg'

const SliderComponent = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                <div>
                    <img src={s1} loading='lazy' alt="Slide 1" className="w-full h-96 object-cover" />
                </div>
                <div>
                    <img src={s2} loading='lazy' alt="Slide 2" className="w-full h-96 object-cover" />
                </div>
                <div>
                    <img src={s3} loading='lazy' alt="Slide 2" className="w-full h-96 object-cover" />
                </div>
                <div>
                    <img src={s4} loading='lazy' alt="Slide 2" className="w-full h-96 object-cover" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
