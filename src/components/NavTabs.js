import React from 'react';
import { SideNav, SideNavItem, Image } from 'react-materialize';
import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo.webp'

const NavTabs = () => {



  return (
    <div>


      <div className="navbar-fixed " id="navbar">
        <nav className="nav ">
          <SideNav
            id="SideNav-10"
            options={{
              draggable: true,
              edge: "left"
            }}
            trigger={<i className="material-icons right black-text titleSmall" node="button">menu</i>}
          >
            <SideNavItem className=""
              user={{
                background: 'https://cdn.discordapp.com/attachments/709148993262977068/924377426514034709/seamless-wood-floor-texture-hardwood-floor-texture-picture-id645858422.png?ex=65ff2810&is=65ecb310&hm=fd03937158a939d8481beed3d4d9856075c0428da1aff57f574989bdb72f1bf1&',
                email: 'Cell Phone: (757)-634-1156',
                image: logo,
                name: 'Crane Hardwood Flooring'
              }}
              userView
            />
            <SideNavItem

              image={<Image alt="logo" source={logo}></Image>}
            ></SideNavItem>
            <SideNavItem>
              <NavLink to="/" exact activeStyle onClick={() => window.scrollTo(0, 0)} className="">Home</NavLink>
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem>
              <NavLink to="/gallery" activeStyle  exact onClick={() => window.scrollTo(0, 0)} className="" >Gallery</NavLink>
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem>
              <NavLink to="/contact" activeStyle  exact onClick={() => window.scrollTo(0, 0)} className="" >Contact</NavLink>
            </SideNavItem>
            <SideNavItem divider />
            <div className="center ">
              <a className=" btn-floating spacing1" rel="noreferrer" href="https://www.google.com/search?q=crane%20hardwood&oq=crane+hardwood&aqs=chrome..69i57j69i59j69i60l3.5064j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AOaemvIcGTQSZpZgQeXS-VGJ8bzGxdeYMg:1640472882213&rflfq=1&num=10&rldimm=10133383004986347856&lqi=Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA&ved=2ahUKEwjxo6HbhYD1AhWOj4kEHYMtAOoQvS56BAgDEDQ&rlst=f#lrd=0x89baa75c066f7f01:0x8ca1022771311150,1,,,&rlfi=hd:;si:10133383004986347856,l,Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA;mv:[[36.7256274,-76.59891499999999],[28.6478898,180]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14" target="_blank">
                <i className="fab fa-google"></i></a>

              <a className=" btn-floating spacing1"
                href="https://www.instagram.com/cranehardwoodflooring/?hl=en" rel="noreferrer" target="_blank">
                <i className="fab fa-instagram "></i></a>
              <a className="btn-floating"
                href="https://www.facebook.com/craneflooring" rel="noreferrer" target="_blank">
                <i className="fab fa-facebook btn-floating"></i></a>

              {/* <a className="animate__animated animate__fadeInUpBig animate__delay-3s btn-floating spacing1" rel="noreferrer" href="https://www.instagram.com/joshua_crane/"
                target="_blank">
                <i className="fab fa-instagram"></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-4s btn-floating spacing1"
                href="https://open.spotify.com/user/jdogcrane?si=ca332a64d48c4b49" rel="noreferrer" target="_blank">
                <i className="fab fa-spotify"></i></a> */}
            </div>
          </SideNav>
          <div>
            <div className="container  animate__animated animate__fadeIn animate__delay-2s">
              <div className="nav-wrapper ">
                <Link  to="/" exact activeStyle onClick={() => window.scrollTo(0, 0)} className="left"><i className='logo' alt="logo"></i></Link>


                <ul className="right hide-on-med-and-down">
                  <li>
                    <NavLink to="/" exact activeStyle onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery" exact activeStyle onClick={() => window.scrollTo(0, 0)} >Gallery</NavLink>
                  </li>
                  <li>
                  <NavLink to="/contact" exact activeStyle onClick={() => window.scrollTo(0, 0)} >Contact</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/Contact" exact activeStyle onClick={() => window.scrollTo(0, 0)} >Contact</NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default NavTabs;
