import React from 'react';
import ContactUs from '../components/ContactUs';

const Contact = () => {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Home / Contact Us</p>
                </div>
            </section>


            <ContactUs />


        </>
    );
};

export default Contact;