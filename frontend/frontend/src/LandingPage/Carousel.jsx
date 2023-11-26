import React, { useState } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import c1 from '../assets/content_1.jpg'
import c2 from '../assets/content_2.jpg'
import c3 from '../assets/content_3.jpg'

const Carousel = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 2660, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    const [items, setItems] = useState([
        { id: 1, image: c1, title: "Card title", para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit." },
        { id: 2, image: c2, title: "Card title", para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit." },
        { id: 3, image: c3, title: "Card title", para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit." },
        { id: 4, image: c1, title: "Card title", para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas natus laudantium suscipit." },
       
     
    ]);
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto">
                <Slider {...settings} >
                    {items.map((item) => (
                        <div className="p-4">
                            <div className="block rounded-lg bg-white/[.08] px-5 py-5 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <img src={item.image} className="w-24 rounded-full"/>              
                                <h5 className="mb-2 text-xl font-medium leading-tight text-white"> {item.title}</h5>
                                <p className="mb-4 text-base text-white">
                                {item.para} 
                                </p>
                                <button type="button" className="inline-block bg-black/[.06] rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">Button</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Carousel
