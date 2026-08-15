import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const reviews = [
    { text: "\u201cJeremiah was very easy to work with and delivered on his promise to make our floors look like new. Very professional and kind. Highly recommend!!!\u201d", author: "Gloria Matabaro" },
    { text: "\u201cI had water damage in an area of my 60 year old hardwood floor. Jeremiah matched it perfectly and repaired the area so that you could never suspect there was damage.\u201d", author: "Ellen McDade" },
    { text: "\u201cJeremiah has done several small and large projects for my old Victorian home in Ghent Norfolk. He\u2019s always incredibly professional and accommodating.\u201d", author: "Tim & Mary Quinn" },
    { text: "\u201cPeople have been complimenting our floors nonstop since Jeremiah refinished them. Everything\u2019s still got that new sheen, it\u2019s just awesome.\u201d", author: "Bob & Tammy Barney" },
];

const services = [
    { icon: "fas fa-broom", title: "Dustless Refinishing", desc: "Virtually dustless hardwood floor sanding and refinishing with top of the line equipment." },
    { icon: "fas fa-hammer", title: "Installation", desc: "Hardwood, LVP, and engineered flooring installation done right." },
    { icon: "fas fa-tools", title: "Repairs", desc: "Water damage, worn boards, gaps \u2014 we match and repair to seamless results." },
];

const info = [
    { icon: "fas fa-map-marker-alt", title: "Service Area", desc: "Norfolk, Virginia Beach, Chesapeake, Suffolk, Hampton, Newport News." },
    { icon: "fas fa-shield-alt", title: "Licensed & Insured", desc: "Fully licensed and insured in the State of Virginia." },
    { icon: "fas fa-star", title: "1 Year Guarantee", desc: "1 year guarantee on all labor. Paid in full only when you\u2019re satisfied." },
];

export default function Home() {
    const sliderRef = useRef(null);
    const heroRef = useRef(null);

    const [videoPlaying, setVideoPlaying] = useState(false);

    let isDown = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {
                if (heroRef.current) {
                    heroRef.current.style.transform =
                        `translateY(${window.scrollY * 0.4}px)`;
                }

                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const el = sliderRef.current;
            if (!el) return;

            const cardWidth = el.children[0]?.offsetWidth + 16;
            const atEnd =
                el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;

            el.scrollTo({
                left: atEnd ? 0 : el.scrollLeft + cardWidth,
                behavior: "smooth",
            });
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const onMouseDown = (e) => {
        const el = sliderRef.current;
        if (!el) return;

        isDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
        isDown = false;
    };

    const onMouseUp = () => {
        isDown = false;
    };

    const onMouseMove = (e) => {
        const el = sliderRef.current;
        if (!el || !isDown) return;

        e.preventDefault();

        const x = e.pageX - el.offsetLeft;
        el.scrollLeft = scrollLeft - (x - startX);
    };

    return (
        <>
            <section id="parallax-1" className="center">
                <img
                    ref={heroRef}
                    src={require("../images/hero.webp")}
                    alt="Crane Flooring"
                    className="hero-img"
                />

                <div className="hero-overlay animate__animated animate__fadeIn animate__delay-1s">
                    <div className="hero-text">
                        <p className="caption white-text background-color">
                            Crane Flooring
                        </p>
                        <p className="normalText white-text italic">
                            &ldquo;Excellence in every step&rdquo;
                        </p>
                    </div>
                </div>
            </section>

            <div className="hero-gap"></div>

            <div className="video-cta-card contain1">
                <div className="video-wrapper">
                    {!videoPlaying ? (
                        <button
                            type="button"
                            className="video-placeholder"
                            onClick={() => setVideoPlaying(true)}
                            aria-label="Play Crane Flooring video"
                        >
                            <img
                                className="videoSizing"
                                src="https://img.youtube.com/vi/lOTXXelNW30/maxresdefault.jpg"
                                alt="Crane Flooring video"
                            />

                            <span className="video-play-button">
                                &#9654;
                            </span>
                        </button>
                    ) : (
                        <iframe
                            className="videoSizing"
                            src="https://www.youtube.com/embed/lOTXXelNW30?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share; fullscreen"
                            allowFullScreen
                        />
                    )}
                </div>

                <div className="cta-strip">
                    <p className="cta-label">Ready to get started?</p>

                    <div className="cta-buttons">
                        <NavLink
                            to="/gallery"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-custom"
                        >
                            View Our Work
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-custom btn-custom-fill"
                        >
                            Set Appointment
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="contain1 spaceSmaller">
                <div className="center">
                    <a
                        className="google-badge"
                        rel="noreferrer"
                        href="https://www.google.com/search?q=crane+hardwood+flooring#lrd=0x89baa75c066f7f01:0x8ca1022771311150,1"
                        target="_blank"
                    >
                        <i className="fab fa-google"></i>
                        <span>5.0</span>
                        <span className="stars">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </span>
                        <span className="badge-sub">50+ Google Reviews</span>
                    </a>
                </div>

                <div
                    ref={sliderRef}
                    className="review-slider"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                >
                    {reviews.map((r, i) => (
                        <div key={i} className="review-card">
                            <p className="review-text">{r.text}</p>
                            <p className="review-author">&mdash; {r.author}</p>

                            <div className="review-stars">
                                {[...Array(5)].map((_, j) => (
                                    <i key={j} className="fas fa-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="contain2 borderBot space">
                <p className="title spacing2">Services</p>

                <div className="services-box spaceSmaller">
                    <p className="greyText">What We Do</p>

                    <div className="services-list spaceSmaller">
                        {services.map((s, i) => (
                            <div key={i} className="services-list-item">
                                <i className={`${s.icon} service-icon`}></i>

                                <div>
                                    <p className="service-title">{s.title}</p>
                                    <p className="normalText">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="services-box spaceSmaller spaceDown">
                    <p className="greyText">Why Choose Us</p>

                    <div className="services-list spaceSmaller">
                        {info.map((s, i) => (
                            <div key={i} className="services-list-item">
                                <i className={`${s.icon} service-icon`}></i>

                                <div>
                                    <p className="service-title">{s.title}</p>
                                    <p className="normalText">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contain1 space spaceDown">
                <div className="about-header spacing2">
                    <p className="title">About Us</p>

                    <div className="about-socials">
                        <a
                            href="https://www.instagram.com/cranehardwoodflooring/?hl=en"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a
                            href="https://www.facebook.com/craneflooring"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>

                <div className="about-box spaceSmaller">
                    <p className="normalText">
                        Crane Flooring was started in 2018 by Jeremiah Crane with the support of Steve Herritt and Caleb Winani, the owner and technical operator of the former flooring company &lsquo;Nu-Tech Hardwood Flooring.&rsquo;
                    </p>

                    <p
                        className="normalText"
                        style={{ marginTop: "1rem" }}
                    >
                        Since then Crane Flooring has provided hardwood flooring services to over 200+ customers. We service the greater Hampton Roads area &mdash; Virginia Beach, Norfolk, Chesapeake, Suffolk, Hampton, Newport News, and Isle of Wight County. We take pride in providing excellent flooring services at an affordable price.
                    </p>
                </div>

                <div className="about-promise spaceSmaller">
                    <p className="greyText">Our Promise</p>

                    <p
                        className="normalText"
                        style={{ marginTop: "0.75rem" }}
                    >
                        I&rsquo;ll only work with the best materials available and provide a 1 year guarantee on all labor. I never compromise quality for time and give my clients realistic schedules that accommodate their lives. I strive for honest customer service, so contracts are only paid in full when the finished work is to your complete satisfaction.
                    </p>
                </div>
            </div>
        </>
    );
}