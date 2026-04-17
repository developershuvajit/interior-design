import React, { useEffect, useState } from 'react';

const CounterItem = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 20);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="counter-card">
            <h2>{count}+</h2>
            <p>{label}</p>
        </div>
    );
};

const Counter = () => {

    const data = [
        { target: 120, label: "Projects Completed" },
        { target: 85, label: "Happy Clients" },
        { target: 10, label: "Years Experience" },
        { target: 25, label: "Design Awards" }
    ];

    return (
        <section className="counter section">
            <div className="container counter-grid">
                {data.map((item, index) => (
                    <CounterItem
                        key={index}
                        target={item.target}
                        label={item.label}
                    />
                ))}
            </div>
        </section>
    );
};

export default Counter;