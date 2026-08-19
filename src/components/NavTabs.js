import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo.webp';
import backdrop from './images/backdrop.webp';

const NavTabs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dragX, setDragX] = useState(0);

    const dragging = useRef(false);
    const startX = useRef(0);
    const currentDragX = useRef(0);

    const closeMenu = () => {
        setMenuOpen(false);
        setDragX(0);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
        setDragX(0);
    };

    const goTop = () => {
        window.scrollTo(0, 0);
        closeMenu();
    };

    // Prevent body scrolling while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handlePointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        dragging.current = true;
        startX.current = event.clientX;
        currentDragX.current = 0;

        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event) => {
        if (!dragging.current) {
            return;
        }

        const distance = Math.min(0, event.clientX - startX.current);

        currentDragX.current = distance;
        setDragX(distance);
    };

    const handlePointerUp = () => {
        if (!dragging.current) {
            return;
        }

        const distance = currentDragX.current;

        dragging.current = false;

        if (distance < -100) {
            closeMenu();
        } else {
            setDragX(0);
        }
    };

    return (
        <>
            <div className="navbar-fixed" id="navbar">
                <nav className="nav">
                    <div>
                        <div className="container animate__animated animate__fadeIn animate__delay-2s">
                            <div className="nav-wrapper">

                                <Link
                                    to="/"
                                    onClick={goTop}
                                    className="left"
                                >
                                    <i
                                        className="logo"
                                        aria-label="Crane Flooring home"
                                    />
                                </Link>

                                <ul className="right hide-on-med-and-down">
                                    <li>
                                        <NavLink
                                            to="/"
                                            exact
                                            onClick={goTop}
                                        >
                                            Home
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/gallery"
                                            exact
                                            onClick={goTop}
                                        >
                                            Gallery
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/contact"
                                            exact
                                            onClick={goTop}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>

                                {!menuOpen && (
                                    <button
                                        type="button"
                                        className="mobile-menu-trigger"
                                        onClick={toggleMenu}
                                        aria-label="Open menu"
                                        aria-expanded="false"
                                        aria-controls="mobile-sidenav"
                                    >
                                        <i className="material-icons black-text">
                                            menu
                                        </i>
                                    </button>
                                )}

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Outside-click backdrop */}
            {menuOpen && (
                <div
                    className="sidenav-backdrop sidenav-backdrop-open"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile drawer */}
            <aside
                className={`sidenav ${menuOpen ? 'sidenav-open' : ''}`}
                id="mobile-sidenav"
                aria-hidden={!menuOpen}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{
                    transform: menuOpen
                        ? `translateX(${dragX}px)`
                        : ''
                }}
            >
                <div className="user-view">
                    <div className="background">
                        <img src={backdrop} alt="" />
                    </div>

                    <img
                        className="circle"
                        src={logo}
                        alt="Crane Hardwood Flooring logo"
                    />

                    <span className="name white-text">
                        Crane Hardwood Flooring
                    </span>

                    <span className="email white-text">
                        Cell Phone: (757)-634-1156
                    </span>
                </div>

                <ul>
                    <li>
                        <NavLink
                            to="/"
                            exact
                            onClick={goTop}
                            className="black-text center"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider" />
                    </li>

                    <li>
                        <NavLink
                            to="/gallery"
                            exact
                            onClick={goTop}
                            className="black-text center"
                        >
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider" />
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            exact
                            onClick={goTop}
                            className="black-text center"
                        >
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider" />
                    </li>

                    <li>
                        <div className="contain about-socials">
                            <a
                                className="center row"
                                href="https://www.google.com/search?q=crane+hardwood"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Crane Flooring on Google"
                            >
                                <i className="fab fa-google" />
                            </a>

                            <a
                                className="center row"
                                href="https://www.instagram.com/cranehardwoodflooring/?hl=en"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Crane Flooring on Instagram"
                            >
                                <i className="fab fa-instagram" />
                            </a>

                            <a
                                className="center row"
                                href="https://www.facebook.com/craneflooring"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Crane Flooring on Facebook"
                            >
                                <i className="fab fa-facebook" />
                            </a>
                        </div>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default NavTabs;