import React from 'react';
import OurServices from '../components/OurServices';
import CTA from '../components/CTA';

const Services = () => {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <h2>Our Services</h2>
                    <p>Home / Services</p>
                </div>
            </section>
            <OurServices />
            <CTA />




        </>
    );
};

export default Services;