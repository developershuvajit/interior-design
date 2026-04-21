import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
    return (
        <>
            <Hero />
            <WhatWeDo />
            <FeaturedProducts />
            <WhyChooseUs />
            <FAQ />
            <Counter />
            <Testimonials />
            <CTA />



        </>
    );
};

export default Home;