import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa';

const MissionVision = () => {
    return (
        <section className="section mission">
            <div className="container mission-wrapper">

                {/* Mission */}
                <div className="mission-card">
                    <div className="mission-icon">
                        <FaBullseye />
                    </div>

                    <h3>Our Mission</h3>

                    <p>
                        Our mission is to transform ordinary spaces into
                        extraordinary environments by combining creativity,
                        functionality, and modern design. We aim to deliver
                        high-quality interior solutions that reflect our
                        clients' lifestyle and personality.
                    </p>
                </div>

                {/* Vision */}
                <div className="mission-card">
                    <div className="mission-icon">
                        <FaEye />
                    </div>

                    <h3>Our Vision</h3>

                    <p>
                        Our vision is to become a leading interior design
                        brand known for innovation, elegance, and excellence.
                        We strive to set new standards in design by creating
                        inspiring and timeless spaces for our clients.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;