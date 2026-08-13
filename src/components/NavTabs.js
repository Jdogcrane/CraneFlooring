import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from 'materialize-css';
import logo from './images/logo.webp'
import backdrop from './images/backdrop.webp'

const NavTabs = () => {
  const sidenavRef = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sidenavRef.current, { draggable: true, edge: 'left' });
  }, []);

  const toggleSidenav = () => {
    const instance = M.Sidenav.getInstance(sidenavRef.current);
    if (instance) instance.isOpen ? instance.close() : instance.open();
  };

  return (
    <div>
      <div className="navbar-fixed" id="navbar">
        <nav className="nav">
          <div>
            <div className="container animate__animated animate__fadeIn animate__delay-2s">
              <div className="nav-wrapper">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="left"><i className='logo' alt="logo"></i></Link>
                <ul className="right hide-on-med-and-down">
                  <li><NavLink to="/" exact activeStyle onClick={() => window.scrollTo(0, 0)}>Home</NavLink></li>
                  <li><NavLink to="/gallery" exact activeStyle onClick={() => window.scrollTo(0, 0)}>Gallery</NavLink></li>
                  <li><NavLink to="/contact" exact activeStyle onClick={() => window.scrollTo(0, 0)}>Contact</NavLink></li>
                </ul>
                <button className="mobile-menu-trigger" onClick={toggleSidenav}>
                  <i className="material-icons black-text">menu</i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-sidenav" ref={sidenavRef}>
        <li>
          <div className="user-view">
            <div className="background">
              <img src={backdrop} alt="background" />
            </div>
            <img className="circle" src={logo} alt="logo" />
            <span className="name white-text">Crane Hardwood Flooring</span>
            <span className="email white-text">Cell Phone: (757)-634-1156</span>
          </div>
        </li>
        <li><NavLink to="/" exact onClick={() => window.scrollTo(0, 0)} className="black-text sidenav-link">Home</NavLink></li>
        <li><div className="divider"></div></li>
        <li><NavLink to="/gallery" exact onClick={() => window.scrollTo(0, 0)} className="black-text sidenav-link">Gallery</NavLink></li>
        <li><div className="divider"></div></li>
        <li><NavLink to="/contact" exact onClick={() => window.scrollTo(0, 0)} className="black-text sidenav-link">Contact</NavLink></li>
        <li><div className="divider"></div></li>
        <li>
          <div className="center">
            <a className="btn-floating spacing1" rel="noreferrer" href="https://www.google.com/search?q=crane+hardwood" target="_blank"><i className="fab fa-google"></i></a>
            <a className="btn-floating spacing1" href="https://www.instagram.com/cranehardwoodflooring/?hl=en" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
            <a className="btn-floating" href="https://www.facebook.com/craneflooring" rel="noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
