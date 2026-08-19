import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo.webp';
import backdrop from './images/backdrop.webp';

const NavTabs = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const goTop = () => {
        window.scrollTo(0, 0);
        closeMenu();
    };

    return (
        <div>
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
                                    <i className="logo" aria-label="Crane Flooring home"></i>
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

                                <button
                                    type="button"
                                    className="mobile-menu-trigger"
                                    onClick={toggleMenu}
                                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                                    aria-expanded={menuOpen}
                                    aria-controls="mobile-sidenav"
                                >
                                    <i className="material-icons black-text">
                                        {menuOpen ? 'close' : 'menu'}
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <div
                    className="sidenav-overlay"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`sidenav ${menuOpen ? 'sidenav-open' : ''}`}
                id="mobile-sidenav"
                aria-hidden={!menuOpen}
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
                            className="black-text sidenav-link"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider"></div>
                    </li>

                    <li>
                        <NavLink
                            to="/gallery"
                            exact
                            onClick={goTop}
                            className="black-text sidenav-link"
                        >
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider"></div>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            exact
                            onClick={goTop}
                            className="black-text sidenav-link"
                        >
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <div className="divider"></div>
                    </li>

                    <li>
                        <div className="center">
                            <a
                                className="btn-floating spacing1"
                                rel="noreferrer"
                                href="https://www.google.com/search?q=crane+hardwood"
                                target="_blank"
                                aria-label="Crane Flooring on Google"
                            >
                                <i className="fab fa-google"></i>
                            </a>

                            <a
                                className="btn-floating spacing1"
                                href="https://www.instagram.com/cranehardwoodflooring/?hl=en"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="Crane Flooring on Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a
                                className="btn-floating"
                                href="https://www.facebook.com/craneflooring"
                                rel="noreferrer"
                                target="_blank"
                                aria-label="Crane Flooring on Facebook"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default NavTabs;