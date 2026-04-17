import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {

    const points = [
        "10+ Years of Experience",
        "Premium Quality Materials",
        "Modern & Unique Designs",
        "Affordable Pricing",
        "On-Time Project Delivery",
        "Customer Satisfaction Guaranteed"
    ];

    return (
        <section className="section why">
            <div className="container why-wrapper">

                {/* Left Content */}
                <div className="why-text">
                    <h2 className="section-title">
                        Why <span>Choose Us</span>
                    </h2>

                    <p>
                        We combine creativity, experience and modern design
                        trends to deliver stunning interiors that match your lifestyle.
                    </p>

                    <ul>
                        {points.map((item, index) => (
                            <li key={index}>
                                <FaCheckCircle className="icon" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="why-image">
                    <img
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                        alt="interior"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;