import React from 'react';
import { FaHome, FaCouch, FaBuilding, FaPaintBrush, FaLightbulb, FaTools } from 'react-icons/fa';
import { FaRulerCombined, FaPalette } from 'react-icons/fa';

const OurServices = () => {

    const services = [
        {
            icon: <FaHome />,
            title: "Residential Interior",
            desc: "Modern and stylish home interiors designed for comfort and elegance."
        },
        {
            icon: <FaBuilding />,
            title: "Commercial Design",
            desc: "Professional office and commercial spaces that boost productivity."
        },
        {
            icon: <FaCouch />,
            title: "Furniture Design",
            desc: "Custom furniture crafted to match your style and space."
        },
        {
            icon: <FaPaintBrush />,
            title: "Decoration & Styling",
            desc: "Enhancing interiors with creative decor and finishing touches."
        },
        {
            icon: <FaLightbulb />,
            title: "Lighting Design",
            desc: "Smart lighting solutions to create the perfect ambiance."
        },
        {
            icon: <FaTools />,
            title: "Renovation",
            desc: "Complete renovation services to transform your old space."
        },
        {
            icon: <FaRulerCombined />,
            title: "Space Planning",
            desc: "Optimizing layouts to make the best use of your available space."
        },
        {
            icon: <FaPalette />,
            title: "Color Consultation",
            desc: "Expert color selection to match your style and enhance interiors."
        }
    ];

    return (
        <section className="section services-page">
            <div className="container">

                <h2 className="section-title">
                    Our <span>Services</span>
                </h2>

                <p className="services-sub">
                    We provide complete interior solutions from concept to execution.
                </p>

                <div className="services-grid">
                    {services.map((item, index) => (
                        <div key={index} className="service-card">

                            <div className="service-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurServices;