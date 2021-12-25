import React from "react";
import { Row, Col, Container } from "react-materialize";
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom";
export default function Home() {
  function myFunction() {
    var elmnt = document.getElementById("scheduler");
    elmnt.scrollIntoView();
  }
  return (

    <>
      {/* Hero/Banner */}
      <section id="parallax-1" className="center">
        <div>
          <p className="invisible">Hardwood Flooring</p>
        </div>
        <div className="spaceBannerTitle ">
          <p className="caption white-text animate__animated animate__fadeIn animate__delay-8s background-color strong">Crane Flooring — because excellence matters </p>
        </div>

      </section>
      <section id="parallax-2" className="">

        <div className="center">

          <button onClick={() => myFunction() + window.location.reload()} className="btn-custom" >Set Appointment</button>
        </div>

        <div className="contain1 borderBot space ">
          <p className="normalText strong spacing2 greyText">
            SERVICES
          </p>
          <p className="title spacing2">
            Crane Flooring
          </p>
          <p className="normalText spacing2 ">
            Refinishing hardwood floors through virtually dustless sanding is what we do.
            We work hard to create stunning results for each customer by treating every floor like it's our own. We work with top of the line equipment, materials and we pay extra close attention to detail, providing our customers with sunning results.
            I'm an experienced flooring contractor with knowledge passed down from generations of skilled flooring experts.
            Crane Flooring is a licensed and insured business in the State of Virginia.
          </p>
          <div className="center space spaceDown">
            <NavLink to="/gallery" onClick={() => window.scrollTo(0, 0)} className="btn-custom" >Project Gallery</NavLink>
          </div>

        </div>
        <div className="contain1 borderBot space ">
          <p className="title spacing2 ">
            About Me
            <a className="animate__animated animate__fadeInUpBig animate__delay-2s btn-floating spacing2"
              href="https://www.instagram.com/cranehardwoodflooring/?hl=en" rel="noreferrer" target="_blank">
              <i className="fab fa-instagram"></i></a>
          </p>
          <p className="normalText spacing2 strong greyText">
            MY NAME IS JEREMIAH CRANE
          </p>
          <p className="normalText spacing2 ">
            I started apprenticing under Steve Herritt & Caleb Wenani in 2014, but even before that, I was watching my dad in construction all the time.
            My grandpa established his construction company in 1968, and specialized in general contracting and carpentry.
            Dad picked up new trades and expanded into a non-profit ministry.
            I’ve been servicing the greater Hampton Roads area of Virginia with hardwood refinishing services for over 4 years and I am excited to see our business growing.
          </p>
          <p className="spacing2 strong greyText">
            MY PROMISE
          </p>
          <p className="normalText spacing2 spaceDown ">
            I’ll only work with the best materials available and provide a 1 year guarantee on all labor.
            I never compromise quality for time and give my clients realistic schedules that accommodate their lives.
            I strive for honest customer service, so contracts are only paid in full when the finished work is to your complete satisfaction.
          </p>

          <div id="scheduler" className="center shadow">

            <div class="apptthingemb contain1 scheduleVis" data-appt-url="cranehardwoodflooring" data-appt-types="ko14777" data-page-text="000000" data-page-link="000000" data-page-details="false" data-emb-num="1" >
              <a href="https://appointmentthing.com" title="Appointment Scheduling">Appointment Scheduling</a></div>
          </div>
        </div>

        <div className="center flow-text strong big-text container">
          <a className="animate__animated animate__fadeInUpBig animate__delay-1s btn-floating spacing2" rel="noreferrer" href="https://www.google.com/search?q=crane%20hardwood&oq=crane+hardwood&aqs=chrome..69i57j69i59j69i60l3.5064j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AOaemvIcGTQSZpZgQeXS-VGJ8bzGxdeYMg:1640472882213&rflfq=1&num=10&rldimm=10133383004986347856&lqi=Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA&ved=2ahUKEwjxo6HbhYD1AhWOj4kEHYMtAOoQvS56BAgDEDQ&rlst=f#lrd=0x89baa75c066f7f01:0x8ca1022771311150,1,,,&rlfi=hd:;si:10133383004986347856,l,Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA;mv:[[36.7256274,-76.59891499999999],[28.6478898,180]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14" target="_blank">
              <i className="fab fa-google"></i></a>
          <p>What People are saying...</p>
        </div>
        <Row className=" space container normalText ">
          <Col
            className="black-text animate__animated animate__delay-3s animate__fadeIn "
            s={12}
            m={6}
            l={6}
          >
            <p> “Jeremiah was very easy to work with and delivered on his promise to make our floors look like new. Very professional and kind. Highly recommend!!!”
            </p>
            <p className="greyText"> — GLORIA MATABARO </p>
          </Col>
          <Col
            className=" space black-text animate__animated animate__delay-3s animate__fadeIn"
            s={12}
            m={6}
            l={6}
          >
            <p>“I had water damage in an area of my 60 year old hardwood floor. Jeremiah matched it perfectly and repaired the area so that you could never suspect there was damage.”
            </p>
            <p className="greyText">— ELLEN MCDADE</p>
          </Col>
        </Row>
        <Row className=" space container normalText  ">
          <Col
            className="black-text animate__animated animate__delay-3s animate__fadeIn"
            s={12}
            m={6}
            l={6}
          >
            <p>“Jeremiah has done several small and large projects for my old Victorian home in Ghent Norfolk. He’s always incredibly professional and accommodating. I know I can trust him to work diligently even when I’m away on vacation.”
            </p>
            <p className="greyText">— TIM & MARY QUINN </p>
          </Col>
          <Col
            className=" space black-text animate__animated animate__delay-3s animate__fadeIn"
            s={12}
            m={6}
            l={6}
          >
            <p>“People have been complimenting our floors nonstop since Jeremiah refinished them. Everything’s still got that new sheen, it’s just awesome.”
            </p>
            <p className="greyText"> — BOB & TAMMY BARNEY</p>
          </Col>
        </Row>
        <Row className=" space container normalText ">
          <Col
            className="black-text animate__animated animate__delay-3s animate__fadeIn"
            s={12}
            m={12}
            l={12}
          >
            <p>“Jeremiah has done several small and large projects for my old Victorian home in Ghent Norfolk. He’s always incredibly professional and accommodating. I know I can trust him to work diligently even when I’m away on vacation.”
            </p>
            <p className="greyText">— TIM & MARY QUINN </p>
          </Col>

        </Row>

      </section>



    </>
  );





}
