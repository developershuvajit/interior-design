import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const NextArrow = ({ onClick }) => (
    <div className="hero-arrow next" onClick={onClick}>→</div>
);

const PrevArrow = ({ onClick }) => (
    <div className="hero-arrow prev" onClick={onClick}>←</div>
);

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        fade: true
    };

    const slides = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
            title: 'Transform Your Space',
            subtitle: 'Professional interior design services'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
            title: 'Modern Interior Design',
            subtitle: 'Contemporary designs for living'
        }
    ];

    return (
        <section className="hero-section">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id}>
                        <div
                            className="hero-slide"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-overlay">
                                <div className="hero-content">
                                    <h1>
                                        {slide.title} <span>Space</span>
                                    </h1>
                                    <p>{slide.subtitle}</p>

                                    <Link to="/contact">
                                        <button>Get Free Quote →</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Hero;