import React from 'react';
import MissionVision from '../components/MissionVision';
import CompanyProfile from '../components/CompanyProfile';

const About = () => {
    return (
        <>
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Home / About</p>
                </div>
            </section>

            {/* About Content */}
            <section className="section about">
                <div className="container about-wrapper">

                    {/* Left Image */}
                    <div className="about-img">
                        <img
                            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                            alt="about"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="about-content">

                        <h2>
                            We Design Your <span>Dream Space</span>
                        </h2>

                        <p>
                            At Interior Design, we specialize in creating modern,
                            elegant, and functional interior spaces tailored to
                            your lifestyle. With over 10 years of experience,
                            our team transforms homes and offices into stunning
                            environments that reflect personality and comfort.
                        </p>

                        <p>
                            Our approach combines creativity, innovation, and
                            attention to detail. From concept to completion,
                            we ensure every project is delivered with quality,
                            style, and precision.
                        </p>

                        <ul>
                            <li>✔ 10+ Years Experience</li>
                            <li>✔ 100+ Successful Projects</li>
                            <li>✔ Client Satisfaction Priority</li>
                            <li>✔ Modern & Unique Designs</li>
                        </ul>

                    </div>

                </div>
            </section>

            <MissionVision />
            <CompanyProfile />



        </>
    );
};

export default About;