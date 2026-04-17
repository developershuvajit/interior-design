import React, { useState } from 'react';

const CTA = () => {

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
        console.log(form); // backend later connect
        alert("Enquiry Submitted!");
    };

    return (
        <section className="section cta">
            <div className="container cta-wrapper">

                {/* Left Text */}
                <div className="cta-text">
                    <h2>
                        Ready to Design Your <span>Dream Space?</span>
                    </h2>
                    <p>
                        Contact us today and get a free consultation for your
                        home or office interior design.
                    </p>
                </div>

                {/* Right Form */}
                <form className="cta-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={form.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">
                        Submit Enquiry →
                    </button>

                </form>

            </div>
        </section>
    );
};

export default CTA;