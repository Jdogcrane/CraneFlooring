import React from "react";
import { Carousel } from "react-materialize";
// import { Link } from "react-scroll"
import { NavLink } from "react-router-dom";

// scheduler scroll to after button press
export default function Home() {
  function myFunction() {
    var elmnt = document.getElementById("scheduler");
    elmnt.scrollIntoView();


  }




  return (

    <>
      {/* Hero/Banner */}
      <section id="parallax-1" className="center ">
        <div>
          <p className="invisible">Hardwood Flooring</p>
        </div>
        <div className="spaceCaption center ">
          <p className="caption banner white-text animate__animated animate__fadeInDown animate__delay-8s background-color">Crane Flooring <p className="normalText white-text italic">“Excellence  in  every  step” </p> </p>
        </div>

      </section>

      <section id="parallax-2" className="">
        <div className="center ">
          <NavLink to="/gallery" onClick={() => window.scrollTo(0, 0)} className="btn-custom" >Project Gallery</NavLink>
        </div>


        <div className="contain2 borderBot space ">

          <strong className="title spacing2">
            Services
          </strong>
          <ul className="normalText list spaceLeft">
            <li>Dustless Hardwood Floor Refinishing </li>
            <li className="spaceSmaller">Hardwood Installation, LVP, Engineered </li>
            <li className="spaceSmaller">Flooring Repairs  </li>
            <li className="spaceSmaller">Service Area: Norfolk, Virginia Beach, Chesapeake, Suffolk, Hampton, Newport News. </li>
            <li className="spaceSmaller">Refinishing hardwood floors through virtually dustless sanding is what we do.
              We work hard to create stunning results for each customer by treating every floor like it’s our own.
              We work with top of the line equipment and materials.
              Our careful attention to detail consistently provides each of our customers with stunning results. </li>
            <li className="spaceSmaller">Licensed and insured in the State of Virginia. </li>
          </ul>
          <div className="center ">

            <button onClick={() => myFunction() + window.location.reload()} className="btn-custom space spaceDown" >Set Appointment</button>
          </div>

        </div>
        <div className="contain1 borderBot space ">
          <p className="title spacing2 ">
            About us
            <a className="btn-floating spacing2"
              href="https://www.instagram.com/cranehardwoodflooring/?hl=en" rel="noreferrer" target="_blank">
              <i className="fab fa-instagram"></i></a>
            <a className="btn-floating"
              href="https://www.facebook.com/craneflooring" rel="noreferrer" target="_blank">
              <i className="fab fa-facebook"></i></a>
          </p>

          <p className="normalText spacing2 ">
            Crane Flooring was started in 2018 by Jeremiah Crane with the support of Steve Herritt and Caleb Winani, the owner and technical operator of the former flooring company 'Nu-Tech Hardwood Flooring.'
          </p>

          <p className="normalText spacing2 ">
            Since then Crane Flooring has provided hardwood flooring services to over 200+ customers over the past four years.
            We service the greater Hampton Roads area of Virginia Beach, Norfolk, Chesapeake, Suffolk, Hampton, Newport News, and Isle of White County Virginia.
            We take pride in providing excellent flooring services at an affordable price.</p>

          <p className="spacing2 strong greyText spaceSmaller">
            OUR PROMISE
          </p>
          <p className="normalText spacing2 spaceDown spaceSmaller ">
            I’ll only work with the best materials available and provide a 1 year guarantee on all labor.
            I never compromise quality for time and give my clients realistic schedules that accommodate their lives. I strive for honest customer service, so contracts are only paid in full when the finished work is to your complete satisfaction.
          </p>

          <div className="center flow-text strong big-text container space">
            <a className="btn-floating spacing2" rel="noreferrer" href="https://www.google.com/search?q=crane%20hardwood&oq=crane+hardwood&aqs=chrome..69i57j69i59j69i60l3.5064j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AOaemvIcGTQSZpZgQeXS-VGJ8bzGxdeYMg:1640472882213&rflfq=1&num=10&rldimm=10133383004986347856&lqi=Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA&ved=2ahUKEwjxo6HbhYD1AhWOj4kEHYMtAOoQvS56BAgDEDQ&rlst=f#lrd=0x89baa75c066f7f01:0x8ca1022771311150,1,,,&rlfi=hd:;si:10133383004986347856,l,Cg5jcmFuZSBoYXJkd29vZEjao8CCurGAgAhaGBAAEAEYABgBIg5jcmFuZSBoYXJkd29vZHoKQ2hlc2FwZWFrZZIBE2Zsb29yaW5nX2NvbnRyYWN0b3KqARYQASoSIg5jcmFuZSBoYXJkd29vZCgA;mv:[[36.7256274,-76.59891499999999],[28.6478898,180]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14" target="_blank">
              <i className="fab fa-google"></i></a>
            <p>What People are saying...</p>
          </div>

          <Carousel
            carouselId="Carousel-42"
            className="black-text center carousel space reviewColor contain2"
            options={{
              fullWidth: true,
              indicators: true
            }}
          >
            <div className="reviewColor">
              <p className="space1 contain3"> “Jeremiah was very easy to work with and delivered on his promise to make our floors look like new. Very professional and kind. Highly recommend!!!”
              </p>
              <p className="greyText contain3"> — GLORIA MATABARO </p>
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div className="reviewColor">
              <p className="space1 contain3">“I had water damage in an area of my 60 year old hardwood floor. Jeremiah matched it perfectly and repaired the area so that you could never suspect there was damage.”
              </p>
              <p className="greyText">— ELLEN MCDADE</p>
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div className="reviewColor">
              <p className="space1 contain3">“Jeremiah has done several small and large projects for my old Victorian home in Ghent Norfolk. He’s always incredibly professional and accommodating. I know I can trust him to work diligently even when I’m away on vacation.”
              </p>
              <p className="greyText">— TIM & MARY QUINN </p>
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <div className="reviewColor">
              <p className="space1 contain3">“People have been complimenting our floors nonstop since Jeremiah refinished them. Everything’s still got that new sheen, it’s just awesome.”
              </p>
              <p className="greyText"> — BOB & TAMMY BARNEY</p>
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
          </Carousel>

          <div id="scheduler" className="center shadow">

            <div class="apptthingemb contain1 scheduleVis space" data-appt-url="cranehardwoodflooring" data-appt-types="ko14777" data-page-text="000000" data-page-link="000000" data-page-details="false" data-emb-num="1" >
              <a href="https://appointmentthing.com" title="Appointment Scheduling">Appointment Scheduling</a></div>
          </div>
        </div>



      </section>



    </>
  );





}
