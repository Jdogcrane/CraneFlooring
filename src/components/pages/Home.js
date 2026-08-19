import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import heroImage from "../images/hero.webp";
// import youtubeThumbnail from "../images/logo.webp";

const reviews = [
    {
        text: "\u201cJeremiah was very easy to work with and delivered on his promise to make our floors look like new. Very professional and kind. Highly recommend!!!\u201d",
        author: "Gloria Matabaro",
    },
    {
        text: "\u201cI had water damage in an area of my 60 year old hardwood floor. Jeremiah matched it perfectly and repaired the area so that you could never suspect there was damage.\u201d",
        author: "Ellen McDade",
    },
    {
        text: "\u201cJeremiah has done several small and large projects for my old Victorian home in Ghent Norfolk. He\u2019s always incredibly professional and accommodating.\u201d",
        author: "Tim & Mary Quinn",
    },
    {
        text: "\u201cPeople have been complimenting our floors nonstop since Jeremiah refinished them. Everything\u2019s still got that new sheen, it\u2019s just awesome.\u201d",
        author: "Bob & Tammy Barney",
    },
];

const services = [
    {
        icon: "fas fa-broom",
        title: "Dustless Refinishing",
        desc: "Virtually dustless hardwood floor sanding and refinishing with top of the line equipment.",
    },
    {
        icon: "fas fa-hammer",
        title: "Installation",
        desc: "Hardwood, LVP, and engineered flooring installation done right.",
    },
    {
        icon: "fas fa-tools",
        title: "Repairs",
        desc: "Water damage, worn boards, gaps \u2014 we match and repair to seamless results.",
    },
];

const info = [
    {
        icon: "fas fa-map-marker-alt",
        title: "Service Area",
        desc: "Norfolk, Virginia Beach, Chesapeake, Suffolk, Hampton, Newport News.",
    },
    {
        icon: "fas fa-shield-alt",
        title: "Licensed & Insured",
        desc: "Fully licensed and insured in the State of Virginia.",
    },
    {
        icon: "fas fa-star",
        title: "1 Year Guarantee",
        desc: "1 year guarantee on all labor. Paid in full only when you\u2019re satisfied.",
    },
];

export default function Home() {
    const sliderRef = useRef(null);
    const heroRef = useRef(null);

    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragScrollLeftRef = useRef(0);

    const [videoPlaying, setVideoPlaying] = useState(false);

    /*
     * Keep the hero parallax animation on the compositor.
     *
     * requestAnimationFrame prevents the scroll event from repeatedly
     * forcing style updates during the same frame.
     */
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {
                if (heroRef.current) {
                    heroRef.current.style.transform =
                        `translate3d(0, ${window.scrollY * 0.4}px, 0)`;
                }

                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /*
     * Automatic review slider.
     */
    useEffect(() => {
        const timer = window.setInterval(() => {
            const el = sliderRef.current;

            if (!el || !el.children.length) return;

            const firstCard = el.children[0];

            const styles = window.getComputedStyle(el);
            const gap = parseFloat(styles.columnGap || styles.gap || "0");

            const cardWidth = firstCard.offsetWidth + gap;

            const atEnd =
                el.scrollLeft + el.clientWidth >=
                el.scrollWidth - 2;

            el.scrollTo({
                left: atEnd ? 0 : el.scrollLeft + cardWidth,
                behavior: "smooth",
            });
        }, 4000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const onMouseDown = (e) => {
        const el = sliderRef.current;

        if (!el) return;

        isDraggingRef.current = true;
        dragStartXRef.current = e.pageX - el.offsetLeft;
        dragScrollLeftRef.current = el.scrollLeft;
    };

    const onMouseLeave = () => {
        isDraggingRef.current = false;
    };

    const onMouseUp = () => {
        isDraggingRef.current = false;
    };

    const onMouseMove = (e) => {
        const el = sliderRef.current;

        if (!el || !isDraggingRef.current) return;

        e.preventDefault();

        const x = e.pageX - el.offsetLeft;
        const walk = x - dragStartXRef.current;

        el.scrollLeft = dragScrollLeftRef.current - walk;
    };

    return (
        <>
            {/* =========================
                HERO
            ========================== */}
            <section
                id="parallax-1"
                className="center"
                aria-labelledby="home-title"
            >
                <div className="hero-image-container">
                    <img
                        ref={heroRef}
                        src={heroImage}
                        alt="Hardwood flooring refinishing by Crane Flooring in Hampton Roads, Virginia"
                        className="hero-img"
                        width="900"
                        height="1600"
                        decoding="async"
                        fetchpriority="high"
                    />
                </div>

                <div className="hero-overlay animate__animated animate__fadeIn animate__delay-1s">
                    <div className="hero-text">
                        <h1
                            id="home-title"
                            className="caption white-text background-color"
                        >
                            Crane Flooring
                        </h1>

                        <p className="normalText white-text italic">
                            "Excellence in every step"
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================
                VIDEO + CTA
            ========================== */}
            <div className="hero-gap"></div>

            <section
                className="video-cta-card contain1"
                aria-labelledby="video-section-title"
            >
                <h2
                    id="video-section-title"
                    className="sr-only"
                >
                    Crane Flooring Services
                </h2>

                <div className="video-wrapper">
                    {!videoPlaying ? (
                        <button
                            type="button"
                            className="video-placeholder"
                            onClick={() => setVideoPlaying(true)}
                            aria-label="Play Crane Flooring hardwood flooring video"
                        >
                            <img
                                className="videoSizing"
                                src="https://img.youtube.com/vi/lOTXXelNW30/maxresdefault.jpg"
                                alt="Crane Flooring hardwood floor refinishing project"
                                width="1280"
                                height="720"
                                loading="lazy"
                                decoding="async"
                            />

                            <span
                                className="video-play-button"
                                aria-hidden="true"
                            >
                                &#9654;
                            </span>
                        </button>
                    ) : (
                        <iframe
                            className="videoSizing"
                            src="https://www.youtube.com/embed/lOTXXelNW30?autoplay=1"
                            title="Crane Flooring hardwood floor refinishing video"
                            loading="lazy"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; web-share; fullscreen"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    )}
                </div>

                <div className="cta-strip">
                    <p className="cta-label">
                        Ready to get started?
                    </p>

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
            </section>

            {/* =========================
                REVIEWS
            ========================== */}
            <section
                className="contain1 spaceSmaller"
                aria-labelledby="reviews-title"
            >
                <div className="center">
                    <a
                        className="google-badge"
                        rel="noopener noreferrer"
                        href="https://www.google.com/search?q=crane+hardwood+flooring#lrd=0x89baa75c066f7f01:0x8ca1022771311150,1"
                        target="_blank"
                        aria-label="View Crane Flooring reviews on Google"
                    >
                        <i
                            className="fab fa-google"
                            aria-hidden="true"
                        ></i>

                        <span>5.0</span>

                        <span
                            className="stars"
                            aria-label="5 out of 5 stars"
                        >
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </span>

                        <span className="badge-sub">
                            50+ Google Reviews
                        </span>
                    </a>
                </div>

                <div
                    ref={sliderRef}
                    className="review-slider"
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    aria-label="Customer reviews"
                >
                    {reviews.map((review) => (
                        <article
                            key={review.author}
                            className="review-card"
                        >
                            <p className="review-text">
                                {review.text}
                            </p>

                            <p className="review-author">
                                &mdash; {review.author}
                            </p>

                            <div
                                className="review-stars"
                                aria-label="5 out of 5 stars"
                            >
                                {[...Array(5)].map((_, index) => (
                                    <i
                                        key={index}
                                        className="fas fa-star"
                                        aria-hidden="true"
                                    ></i>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* =========================
                SERVICES
            ========================== */}
            <section
                className="contain2 borderBot space"
                aria-labelledby="services-title"
            >

                <div className="services-box spaceSmaller">
                    <p className="greyText">
                        What We Do
                    </p>

                    <div className="services-list spaceSmaller">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="services-list-item"
                            >
                                <i
                                    className={`${service.icon} service-icon`}
                                    aria-hidden="true"
                                ></i>

                                <div>
                                    <h3 className="service-title">
                                        {service.title}
                                    </h3>

                                    <p className="normalText">
                                        {service.desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="services-box spaceSmaller spaceDown">
                    <p className="greyText">
                        Why Choose Us
                    </p>

                    <div className="services-list spaceSmaller">
                        {info.map((item) => (
                            <article
                                key={item.title}
                                className="services-list-item"
                            >
                                <i
                                    className={`${item.icon} service-icon`}
                                    aria-hidden="true"
                                ></i>

                                <div>
                                    <h3 className="service-title">
                                        {item.title}
                                    </h3>

                                    <p className="normalText">
                                        {item.desc}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================
                ABOUT
            ========================== */}
            <section
                className="contain1 space spaceDown"
                aria-labelledby="about-title"
            >
                <div className="about-header spacing2">
                    <h2
                        id="about-title"
                        className="title"
                    >
                        About Crane Flooring
                    </h2>

                    <div className="about-socials">
                        <a
                            href="https://www.instagram.com/cranehardwoodflooring/?hl=en"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Crane Flooring on Instagram"
                        >
                            <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                            ></i>
                        </a>

                        <a
                            href="https://www.facebook.com/craneflooring"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Crane Flooring on Facebook"
                        >
                            <i
                                className="fab fa-facebook"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                </div>

                <div className="about-box spaceSmaller">
                    <p className="normalText">
                        Crane Flooring was started in 2018 by Jeremiah Crane
                        with the support of Steve Herritt and Caleb Winani,
                        the owner and technical operator of the former
                        flooring company &lsquo;Nu-Tech Hardwood Flooring.&rsquo;
                    </p>

                    <p
                        className="normalText"
                        style={{ marginTop: "1rem" }}
                    >
                        Since then Crane Flooring has provided hardwood
                        flooring services to over 200+ customers. We service
                        the greater Hampton Roads area &mdash; Virginia Beach,
                        Norfolk, Chesapeake, Suffolk, Hampton, Newport News,
                        and Isle of Wight County. We take pride in providing
                        excellent flooring services at an affordable price.
                    </p>
                </div>

                <div className="about-promise spaceSmaller">
                    <p className="greyText">
                        Our Promise
                    </p>

                    <p
                        className="normalText"
                        style={{ marginTop: "0.75rem" }}
                    >
                        I&rsquo;ll only work with the best materials available
                        and provide a 1 year guarantee on all labor. I never
                        compromise quality for time and give my clients
                        realistic schedules that accommodate their lives. I
                        strive for honest customer service, so contracts are
                        only paid in full when the finished work is to your
                        complete satisfaction.
                    </p>
                </div>
            </section>
        </>
    );
}