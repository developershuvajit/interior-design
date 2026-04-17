import React, { useState } from 'react';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does an interior project take?",
            answer: "It depends on the project size, but usually 2-6 weeks."
        },
        {
            question: "Do you provide custom furniture?",
            answer: "Yes, we design and build custom furniture as per your needs."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing based on design, materials and project scope."
        },
        {
            question: "Do you offer free consultation?",
            answer: "Yes, we provide a free initial consultation for all clients."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq">
            <div className="container">

                <h2 className="section-title">
                    Frequently Asked <span>Questions</span>
                </h2>

                <div className="faq-wrapper">
                    {faqs.map((item, index) => (
                        <div key={index} className="faq-item">

                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4>{item.question}</h4>
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </div>

                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;