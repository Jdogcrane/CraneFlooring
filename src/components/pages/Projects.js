import React from 'react';
import '../../Styles/Projects.css';
import { Row, Col } from 'react-materialize';
export default function Projects() {
  return (

    <>
      <section id="parallax-header" className="outer-pro1">

        <Row className=" space container ">
          <Col
            className=" white-text animate__animated  animate__delay-3s animate__fadeIn title center"
            s={12}
            m={12}
            l={12}
          >
            <p>Things I've Done</p>

          </Col>
          <Col
            className=" white-text animate__animated  animate__delay-3s animate__fadeIn normalText center spaceSmall"
            s={12}
            m={12}
            l={12}
          >
            <p>My highlighted projects I've worked on over the past year.</p>

            <div className=" space2">
              <i class="fas orange-text animate__animated fa-angle-double-down"></i>

            </div>
          </Col>
        </Row>
      </section>
      <section id="parallax-pro1" className="outer-pro1">
        <div className="overlay-pro1">
        </div>



        <Row className="animate__animated animate__fadeIn animate__delay-3s  container">
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText">
                  <p className="title center">
                    Covid & Cats
                  </p>
                  <p className="orange-text center">
                  Days To Complete: 4
                  </p>
                  <p className="borderBotG borderTopG spaceSmaller"> A website that allows the user to utilize Covid-19 data from across the United States of America to track, total cases, active cases, recovery's and deaths. We used a few API's to allow users to be informed and comforted at the same time by providing cat gif's and covid data. My role was mostly set on the design and exploration of the materialize framework while testing and debugging API's.</p>
                </div>
                <div className="center spaceSmaller">
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img className="img-tech" src="https://cdn.discordapp.com/attachments/709148993262977068/897938716079845386/5847f5bdcef1014c0b5e489c.png" alt="html5" href="#aboutme" /></a>
                  <a href="https://www.javascript.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897939973729300491/javascript-map-javascript-javascript-icon-with-png-892806.png" alt="JS" href="#aboutme" /></a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897941018618499073/pngkey.com-quality-icon-png-6241203.png" alt="CSS" href="#aboutme" /></a>
                  <a href="https://materializecss.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897936594428891226/pngegg.png" alt="Materialize" href="#aboutme" /></a>
                  <a href="https://git-scm.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897947921285259264/git-logo.png" alt="GIT" href="#aboutme" /></a>
                  <a href="https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897923516505141288/Untitled.png" alt="API" href="#aboutme" /></a>
                  <a href="https://developers.giphy.com/docs/api/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897923516505141288/Untitled.png" alt="API" href="#aboutme" /></a>
                </div>
                <div className="spaceSmall">
                  <div className=" center normalText">
                    <a href="https://github.com/Jdogcrane/covid-and-cats" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Repository <i class="fab white-text fa-github"></i></a>
                    <a href="https://jdogcrane.github.io/covid-and-cats/" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Live Demo <i class="fas orange-text fa-play-circle"></i></a>
                  </div>

                </div>
              </div>
            </div>
          </Col>
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area space container">

                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962866016321536/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963074288681020/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963214541991946/unknown.png" alt="projectIMG" className="img-box box-1"></img>

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section id="parallax-pro2" className="outer-pro1 ">

        <Row className="animate__animated animate__fadeIn animate__delay-3s space container">
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area space container">

                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962721631592549/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962587082506270/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872962515531870228/unknown.png" alt="projectIMG" className="img-box box-1"></img>

                </div>
              </div>
            </div>
          </Col>
          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText">
                  <p className="title center">
                    Forum Friends
                  </p>
                  <p className="orange-text center">
                  Days To Complete: 6
                  </p>
                  <p className="borderBotG borderTopG spaceSmaller"> A social media platform for users to be social and connected from around the world without algorithms effecting what they see while being 100% ad free. My role was to use handlebars to build and design the front end user experience while helping debug the backend.</p>
                </div>
                <div className=" center spaceSmaller ">

                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img className="img-tech" src="https://cdn.discordapp.com/attachments/709148993262977068/897938716079845386/5847f5bdcef1014c0b5e489c.png" alt="html5" href="#aboutme" /></a>
                  <a href="https://www.javascript.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897939973729300491/javascript-map-javascript-javascript-icon-with-png-892806.png" alt="JS" href="#aboutme" /></a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897941018618499073/pngkey.com-quality-icon-png-6241203.png" alt="CSS" href="#aboutme" /></a>
                  <a href="https://expressjs.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897949990108950558/node-js-1174925.webp" alt="express" href="#aboutme" /></a>
                  <a href="https://sequelize.org/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897953275985428480/Microsoft.VisualStudio.Services.Icons.png" alt="SQL" href="#aboutme" /></a>
                  <a href="https://www.mongodb.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897950194212171796/mongodb-replicaset.webp" alt="mongoDB" href="#aboutme" /></a>
                  <a href="https://git-scm.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897947921285259264/git-logo.png" alt="GIT" href="#aboutme" /></a>
                  <a href="https://materializecss.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897936594428891226/pngegg.png" alt="Materialize" href="#aboutme" /></a>
                  <a href="https://handlebarsjs.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897950676531961876/handlebars-js.png" alt="handleBars" href="#aboutme" /></a>

                </div>
                <div className="spaceSmall">
                  <div className=" center normalText">
                    <a href="https://github.com/huirayj/forum-friends" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Repository <i class="fab white-text fa-github"></i></a>


                    <a href="https://forum-friends.herokuapp.com/" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Live Demo <i class="fas orange-text fa-play-circle"></i></a>
                  </div>

                </div>
              </div>
            </div>

          </Col>
        </Row>
      </section>

      <section id="parallax-pro3" className="outer-pro1 ">

        <Row className="animate__animated animate__fadeIn animate__delay-3s space1 container ">

          <Col
            className=" white-text "
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="container normalText">
                  <p className="title center">
                    Rapid Resume
                  </p>
                  <p className="orange-text center">
                    Days To Complete: 7
                  </p>
                  <p className="borderBotG borderTopG spaceSmaller"> Login and rapidly deploy your resume with no ads and 100% free from start to finish with no strings attached. My role was the primary UI/UX designer using react and Bulma framework to build out the whole site.</p>
                </div>
                <div className=" center spaceSmaller ">

                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"><img className="img-tech" src="https://cdn.discordapp.com/attachments/709148993262977068/897938716079845386/5847f5bdcef1014c0b5e489c.png" alt="html5" href="#aboutme" /></a>
                  <a href="https://www.javascript.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897939973729300491/javascript-map-javascript-javascript-icon-with-png-892806.png" alt="JS" href="#aboutme" /></a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897941018618499073/pngkey.com-quality-icon-png-6241203.png" alt="CSS" href="#aboutme" /></a>
                  <a href="https://expressjs.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897949990108950558/node-js-1174925.webp" alt="express" href="#aboutme" /></a>
                  <a href="https://www.mongodb.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897950194212171796/mongodb-replicaset.webp" alt="mongoDB" href="#aboutme" /></a>
                  <a href="https://reactjs.org/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897954364872867941/512px-React-icon.svg.png" alt="ReactJS" href="#aboutme" /></a>
                  <a href="https://sequelize.org/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897953275985428480/Microsoft.VisualStudio.Services.Icons.png" alt="ReactJS" href="#aboutme" /></a>
                  <a href="https://git-scm.com/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897947921285259264/git-logo.png" alt="GIT" href="#aboutme" /></a>
                  <a href="https://bulma.io/"><img className="img-tech " src="https://cdn.discordapp.com/attachments/709148993262977068/897955086305742858/bulma-logo.png" alt="Bulma" href="#aboutme" /></a>
                </div>
                <div className="spaceSmall">
                  <div className=" center normalText">
                    <a href="https://github.com/morrisbianco/resume-builder" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Repository <i class="fab white-text fa-github"></i></a>


                    <a href="https://rapid-resume.herokuapp.com/" target="__blank" className="link borderRoundG spacing2 animate__fadeInUpBig">Live Demo <i class="fas orange-text fa-play-circle"></i></a>
                  </div>

                </div>
              </div>
            </div>
            {/* <div className=" ">
              <div className="">
                <div className="container normalText center">
                  <p className="title borderBotG">
                    Rapid Resume
                  </p>
                  <p> Build a resume stored in mongoDB using, React, Express Servers, Auth and Bulma as the framework.</p>
                  <div className="spaceSmall">
                    <a href="https://rapid-resume.herokuapp.com/" target="__blank" className="link borderRoundG">Learn More <i class="fas orange-text fa-angle-double-right"></i></a>

                  </div>
                </div>
              </div>
            </div> */}
          </Col>

          <Col
            className=" white-text"
            s={12}
            m={6}
            l={6}
          >
            <div className=" ">
              <div className="">
                <div className="img-area space container">
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963637239762995/unknown.png" alt="projectIMG" className="img-box box-3"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872964035400830976/unknown.png" alt="projectIMG" className="img-box box-2"></img>
                  <img src="https://cdn.discordapp.com/attachments/709148993262977068/872963710736556042/chrome_LojRghipQe.jpg" alt="projectIMG" className="img-box box-1"></img>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}
