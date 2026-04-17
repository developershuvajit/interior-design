import React from 'react';

const Testimonials = () => {

    const data = [
        {
            name: "Rahul Sharma",
            role: "Home Owner",
            text: "Amazing work! My home looks stunning and modern. Highly recommended.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Priya Das",
            role: "Client",
            text: "Professional team with creative ideas. Loved the design and execution.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Amit Verma",
            role: "Office Owner",
            text: "They transformed our office into a beautiful workspace. Great job!",
            image: "https://randomuser.me/api/portraits/men/65.jpg"
        }
    ];

    return (
        <section className="section testimonial">
            <div className="container">

                <h2 className="section-title">
                    What Our <span>Clients Say</span>
                </h2>

                <div className="testimonial-grid">
                    {data.map((item, index) => (
                        <div key={index} className="testimonial-card">

                            <p className="testimonial-text">
                                “{item.text}”
                            </p>

                            <div className="testimonial-user">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;