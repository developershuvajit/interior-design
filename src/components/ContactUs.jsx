import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Message Sent Successfully!");
    };

    return (
        <>


            {/* Contact Section */}
            <section className="section contact">
                <div className="container contact-wrapper">

                    {/* Left Info */}
                    <div className="contact-cards">

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4>Address</h4>
                                <p>Kolkata, West Bengal, India</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 98765 43210</p>
                                <p>+91 91234 56789</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>info@interior.com</p>
                                <p>support@interior.com</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit">
                            Send Message →
                        </button>

                    </form>

                </div>
            </section>

            {/* Google Map */}
            <section className="map">
                <iframe
                    src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="map"
                    loading="lazy"
                ></iframe>
            </section>
        </>
    );
};

export default ContactUs;