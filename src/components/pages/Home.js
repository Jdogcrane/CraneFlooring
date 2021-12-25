import React from "react";
import { Row, Col, Container } from "react-materialize";
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Hero/Banner */}
      <section id="parallax-1" className="center">
        <div>
          <p className="invisible">Hardwood Flooring</p>
        </div>
        <div className="spaceBannerTitle">
          <p className="flow-text white-text animate__animated animate__fadeIn animate__delay-8s  ">Crane Flooring — because excellence matters </p>
        </div>

      </section>
      <section id="parallax-2" className="">
        <div className="center">
          <NavLink to="/gallery" onClick={() => window.scrollTo(0, 0)} className="btn-custom" >Set Appointment</NavLink>
        </div>
        <div className="contain1 borderBot space ">
          <p className="text">
            SERVICES
          </p>
          <p className="title">
            Crane Flooring
          </p>
          <p className=" spacing2 ">
            Refinishing hardwood floors through virtually dustless sanding is what we do.
            We work hard to create stunning results for each customer by treating every floor like it’s our own. We work with top of the line equipment, materials and we pay extra close attention to detail, providing our customers with sunning results.
            I’m an experienced flooring contractor with knowledge passed down from generations of skilled flooring experts.
            Crane Flooring is a licensed and insured business in the State of Virginia.
          </p>
          <div className="center space spaceDown">
            <NavLink to="/gallery" onClick={() => window.scrollTo(0, 0)} className="btn-custom" >Project Gallery</NavLink>
          </div>

        </div>
        <div className="contain1 borderBot space ">
          <p className="title ">
            About Me
          </p>
          <p className="text">
            MY NAME IS JEREMIAH CRANE
          </p>
          <p className=" spacing2 ">
            I started apprenticing under Steve Herritt & Caleb Wenani in 2014, but even before that, I was watching my dad in construction all the time.
            My grandpa established his construction company in 1968, and specialized in general contracting and carpentry.
            Dad picked up new trades and expanded into a non-profit ministry.
            I’ve been servicing the greater Hampton Roads area of Virginia with hardwood refinishing services for over 4 years and I am excited to see our business growing.
          </p>
          <p className="strong">
            MY PROMISE
          </p>
          <p className=" spacing2 spaceDown ">
            I’ll only work with the best materials available and provide a 1 year guarantee on all labor.
            I never compromise quality for time and give my clients realistic schedules that accommodate their lives.
            I strive for honest customer service, so contracts are only paid in full when the finished work is to your complete satisfaction.
          </p>

        </div>
      </section>


    
    </>
  );
}
