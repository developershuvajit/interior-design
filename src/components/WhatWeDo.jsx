import React from 'react';
import { FaHome, FaCouch, FaBuilding, FaPaintBrush } from 'react-icons/fa';

const WhatWeDo = () => {

    const services = [
        {
            icon: <FaHome />,
            title: "Interior Design",
            desc: "Modern and elegant home interior solutions"
        },
        {
            icon: <FaCouch />,
            title: "Furniture Design",
            desc: "Custom furniture crafted for comfort & style"
        },
        {
            icon: <FaBuilding />,
            title: "Office Setup",
            desc: "Professional workspace design for productivity"
        },
        {
            icon: <FaPaintBrush />,
            title: "Decoration",
            desc: "Stylish decor to enhance your living space"
        }
    ];

    return (
        <section className="section whatwedo">
            <div className="container">

                <h2 className="section-title">
                    What <span>We Do</span>
                </h2>

                <div className="wwd-grid">
                    {services.map((item, index) => (
                        <div key={index} className="wwd-card">

                            <div className="wwd-icon">
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

export default WhatWeDo;