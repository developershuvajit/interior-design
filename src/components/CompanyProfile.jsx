import React from 'react';

const CompanyProfile = () => {

    const timeline = [
        { year: "2012", text: "Company founded with a vision for modern interiors" },
        { year: "2015", text: "Completed 50+ residential interior projects" },
        { year: "2018", text: "Expanded into commercial & office design" },
        { year: "2020", text: "Introduced premium material & custom solutions" },
        { year: "2022", text: "Reached 100+ happy clients milestone" },
        { year: "2024", text: "Launched advanced design & 3D visualization services" }
    ];

    return (
        <section className="section company-profile">
            <div className="container">

                <h2 className="section-title">
                    Our <span>Journey</span>
                </h2>

                <div className="cp-wrapper">

                    {/* LEFT TEXT */}
                    <div className="cp-text">
                        <h3>Designing Spaces That Inspire Living</h3>

                        <p>
                            We started with a simple belief — great design should
                            not only look beautiful but also improve everyday living.
                            Our journey began with small residential projects and
                            has grown into delivering complete interior solutions.
                        </p>

                        <p>
                            Over the years, we have focused on innovation, detail,
                            and client satisfaction. Every project we take is
                            approached with creativity and precision, ensuring
                            a perfect balance between aesthetics and functionality.
                        </p>

                        <p>
                            Today, we continue to evolve with modern trends,
                            advanced tools, and high-quality materials to
                            create interiors that truly stand out.
                        </p>

                        {/* Highlights */}
                        <div className="cp-stats">
                            <div>
                                <h4>150+</h4>
                                <p>Projects</p>
                            </div>
                            <div>
                                <h4>100+</h4>
                                <p>Clients</p>
                            </div>
                            <div>
                                <h4>10+</h4>
                                <p>Years</p>
                            </div>
                            <div>
                                <h4>24/7</h4>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT TIMELINE */}
                    <div className="cp-timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="cp-item">
                                <div className="cp-circle"></div>
                                <div className="cp-box">
                                    <h4>{item.year}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CompanyProfile;