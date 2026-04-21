import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Refs for GSAP animations
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const formRef = useRef(null);
    const trustRef = useRef(null);
    const imageRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const floatingIconsRef = useRef([]);

    useEffect(() => {
        // GSAP Timeline
        const tl = gsap.timeline();

        // Initial animations
        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        )
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            )
            .fromTo(descRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                "-=0.3"
            )
            .fromTo(formRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(trustRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
                "-=0.3"
            )
            .fromTo(imageRef.current,
                { scale: 0.9, opacity: 0, x: 50 },
                { scale: 1, opacity: 1, x: 0, duration: 0.7, ease: "back.out(0.4)" },
                "-=0.5"
            )
            .fromTo(card1Ref.current,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" },
                "-=0.3"
            )
            .fromTo(card2Ref.current,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" },
                "-=0.3"
            );

        // Floating icons continuous animation
        floatingIconsRef.current.forEach((icon, index) => {
            if (icon) {
                gsap.to(icon, {
                    y: -20,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: index * 0.5
                });

                gsap.to(icon, {
                    rotate: 5,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    delay: index * 0.3
                });
            }
        });

        // Parallax effect on scroll
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (imageRef.current) {
                gsap.to(imageRef.current, {
                    y: scrolled * 0.2,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToRefs = (el) => {
        if (el && !floatingIconsRef.current.includes(el)) {
            floatingIconsRef.current.push(el);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            // Add click animation
            gsap.to('.hero-button', {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
            setSearchTerm('');
        }
    };

    return (
        <section className="hero-section" ref={heroRef}>
            {/* Background Gradient with Floating Icons */}
            <div className="hero-bg">
                <div className="hero-bg-gradient"></div>
                <div className="hero-floating-icons">
                    <svg ref={addToRefs} className="floating-icon icon-1" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M20 7h-4.18A3 3 0 0 0 16 5.18V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <svg ref={addToRefs} className="floating-icon icon-2" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                    <svg ref={addToRefs} className="floating-icon icon-3" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15 15 0 0 0 0 20 15 15 0 0 0 0-20z" />
                    </svg>
                    <svg ref={addToRefs} className="floating-icon icon-4" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <svg ref={addToRefs} className="floating-icon icon-5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                    </svg>
                    <svg ref={addToRefs} className="floating-icon icon-6" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M4 4h16v16H4z" />
                        <line x1="8" y1="8" x2="16" y2="16" />
                        <line x1="16" y1="8" x2="8" y2="16" />
                    </svg>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-grid">
                    {/* Left Content */}
                    <div className="hero-content">
                        <h1 className="hero-title" ref={titleRef}>
                            Transform Your <span className="hero-highlight">Space</span>
                            <br />With Premium Design
                        </h1>
                        <p className="hero-description" ref={descRef}>
                            Professional interior design services for your dream home.
                            We create modern, elegant, and functional spaces that reflect your personality.
                        </p>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="hero-form" ref={formRef}>
                            <div className="hero-form-wrapper">
                                <div className="hero-input-wrapper">
                                    <svg className="hero-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="10" cy="10" r="7" />
                                        <line x1="21" y1="21" x2="15" y2="15" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search for furniture, plywood, accessories..."
                                        className="hero-input"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="hero-button-wrapper">
                                    <button type="submit" className="hero-button">
                                        Explore Now
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Trust Badge */}
                        <div className="hero-trust" ref={trustRef}>
                            <p className="hero-trust-text">Trusted by 5000+ Happy Customers</p>
                            <div className="hero-rating">
                                <div className="hero-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="hero-star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="hero-rating-score">4.9/5</span>
                                <span className="hero-rating-reviews">(2,345 reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-image-wrapper">
                        <div className="hero-image-container" ref={imageRef}>
                            <img
                                className="hero-image"
                                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Interior Design"
                            />
                        </div>
                        {/* Floating Cards */}
                        <div className="hero-floating-card hero-card-1" ref={card1Ref}>
                            <div className="hero-card-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c6a43f" strokeWidth="1.5">
                                    <path d="M20 7h-4.18A3 3 0 0 0 16 5.18V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg>
                            </div>
                            <div className="hero-card-text">
                                <h4>Expert Designers</h4>
                                <p>10+ Years Experience</p>
                            </div>
                        </div>
                        <div className="hero-floating-card hero-card-2" ref={card2Ref}>
                            <div className="hero-card-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c6a43f" strokeWidth="1.5">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
                                </svg>
                            </div>
                            <div className="hero-card-text">
                                <h4>Premium Quality</h4>
                                <p>Trusted Brand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;