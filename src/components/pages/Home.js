import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <>
      {/* Space */}
      <section id="parallax-1" className="outer-space">
        <div className="overlay-space">
        </div>

        <div id="/" className=" center">
          <div className="container center ">

            <div className="contain animate__animated animate__backInUp  ">
              <img className="me circle z-depth-3 space1" src="https://cdn.discordapp.com/attachments/709148993262977068/870349043782537236/me.png" alt="me" href="#aboutme" />
            </div>
            <div className="center ">

              <a className="animate__animated animate__fadeInUpBig animate__delay-1s btn-floating spacing1" rel="noreferrer" href="https://github.com/Jdogcrane" target="_blank">
                <i className="fab fa-github "></i></a>

              <a className="animate__animated animate__fadeInUpBig animate__delay-2s btn-floating spacing1"
                href="https://www.linkedin.com/in/joshua-crane-911532210/" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin "></i></a>
            </div>
          </div>

        </div>
        <div className="center container">
          <h1 className="grey-text text-lighten-2 flow-text title space animate__animated animate__fadeInUpBig animate__delay-3s">Hey,<span> I'm</span> 
          <a href="https://github.com/Jdogcrane" className="link"> Josh </a>
          </h1>
          <div className="center">
            <br />
            <p className="grey-text text-lighten-2 animate__animated animate__fadeIn animate__delay-8s flow-text ">Welcome to my personal site designed and built by me for you.</p>

          </div>


          <p className="grey-text text-lighten-2 flow-text animate__animated animate__fadeIn animate__delay-8s space2 title ">Discover More<span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
            <span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></p>


          <Row className="animate__animated animate__fadeIn animate__delay-8s">
            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={4}
            >
              <div className="">

                <Link to="journey" smooth={"true"} className="white-text link flow-text  italic borderRoundG active">The Journey Here</Link>
              </div>

            </Col>

            <Col
              className=" white-text space"
              s={12}
              m={6}
              l={4}
            >
              <div className="">

                <NavLink to="/projects" smooth={"true"} className="white-text flow-text link  italic borderRoundG active" onClick={() => window.scrollTo(0, 0)}>Projects I've Worked On</NavLink>
              </div>
            </Col>
            {/* <Col
              className=" white-text space"
              s={6}
              m={6}
              l={3}
            >
              <div className="">

                <NavLink to="/resume" smooth={"true"} className="white-text flow-text link  italic borderBotG active" onClick={() => window.scrollTo(0, 0)}>The Specifics</NavLink>
              </div>
            </Col> */}
            <Col
              className=" white-text space"
              s={12}
              m={12}
              l={4}
            >
              <div className="">

                <Link to="contact" smooth={"true"} className="white-text flow-text link  italic borderRoundG active">Contact Me</Link>
              </div>

            </Col>
          </Row>


        </div>
      </section>

      {/* Clouds - The Journey Here */}
      <div id="journey">
      </div>
      <section id="parallax-2" className="outer-cloud ">
        <div className="overlay-cloud">
        </div>


        <div className="contain1  animate__animated animate__fadeIn animate__delay-5s ">
          {/* Why I'm Here*/}
          <p className="white-text text-lighten-2 flow-text borderBot space title center ">Why I'm Here</p>
          <br />

          <div className="contain1  ">

            <p className="white-text text-lighten-2 flow-text text ">
              Using the tools and skills I have learned over the past years and recent months I am looking to develope more sites and apps that can help solve real world problems.
              I thrive off of fast paced team oriented projects with creative freedom. And with a background in customer service I'm seeking to continue to serve a new community of costumers with a team that I can grow with.</p>

            {/* What I've Done*/}
            <p className="white-text text-lighten-2 flow-text borderBot space title center ">What I've Done</p>
            <br />
            <p className="white-text text-lighten-2 flow-text text ">
              Over the past year I have self taught myself to learn many of the fundamentals of front end work. I decided to further develope my skills by attending a program at <a
                href="https://www.uncc.edu/" className="link borderBotBNo white-text italic"> UNCC </a> <span className="italic">- 8/1/21.</span> </p>
            <div>
              <p className="white-text text-lighten-2 flow-text "><span className="">
                <br></br>I later graduated as a Full Stack Web Developer specializing in UI-UX design. Near the top of my class and confident with the skills learned I set out to find a workplace that will fit me best.</span></p>
              <br />
            </div>
            {/* What I Learned */}
            <p className="space title center white-text text-lighten-2 flow-text spacing2">What I Learned</p>
            <Row className="">
              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className=" borderBotBNo center flow-text textTheme">Front-End</p>
                <div className="white-text text-lighten-2 background-color borderRound center flow-text-small flow-text text  ">
                  <ul>
                    <li><a href="https://handlebarsjs.com/" target="__blank" className="link white-text">Handlebars</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="__blank" className="link white-text">HTML/CSS</a></li>
                    <li><a href="https://materializecss.com/" target="__blank" className="link white-text">Materialize</a></li>
                    <li><a href="https://getbootstrap.com/" target="__blank" className="link white-text">Bootstrap</a></li>
                    <li><a href="https://www.javascript.com/" target="__blank" className="link white-text">JavaScript</a></li>
                    <li><a href="https://jquery.com/" target="__blank" className="link white-text">jQuery</a></li>
                    <li><a href="https://bulma.io/" target="__blank" className="link white-text">Bulma</a></li>
                    <li><a href="https://api.jquery.com/jquery.ajax/" target="__blank" className="link white-text">AJAX</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API" target="__blank" className="link white-text">APIs</a></li>
                    <li><a href="https://git-scm.com/" target="__blank" className="link white-text">Git</a></li>
                  </ul>
                </div>
              </Col>

              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className="textTheme borderBotBNo center   flow-text ">Back-End</p>
                <div className="white-text text-lighten-2 center background-color flow-text-small flow-text text  borderRound ">
                  <ul>
                    <li><a href="https://expressjs.com/" target="__blank" className="link white-text">Express servers</a></li>
                    <li><a href="https://expressjs.com/en/guide/error-handling.html" target="__blank" className="link white-text">Error Handling</a></li>
                    <li><a href="https://sequelize.org/" target="__blank" className="link white-text">Sequelize</a></li>
                    <li><a href="https://jestjs.io/" target="__blank" className="link white-text">Jest Test</a></li>
                    <li><a href="https://www.heroku.com/" target="__blank" className="link white-text">Heroku</a></li>
                    <li><a href="https://www.mysql.com/" target="__blank" className="link white-text">MySQL</a></li>
                    <li><a href="https://nodejs.org/en/" target="__blank" className="link white-text">Node</a></li>
                  </ul>
                </div>
              </Col>
              <Col
                className=" white-text "
                s={4}
                m={4}
                l={4}
              >
                <p className="textTheme borderBotBNo center flow-text">Performance</p>
                <div className="white-text text-lighten-2 background-color borderRound center flow-text-small flow-text text  ">
                  <ul>
                    <li><a href="https://cci.uncc.edu/academics/computer-science/undergraduate-programs/courses" target="__blank" className="link white-text ">Computer Science</a></li>
                    <li><a href="https://www.mongodb.com/" target="__blank" className="link white-text ">MongoDB</a></li>

                    <li><a href="https://reactjs.org/" target="__blank" className="link white-text ">React</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="__blank" className="link white-text ">PWA</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* City - Contact */}
      </section>
      <div className="transition2" id="aboutMe">
      </div>

      <section id="parallax-3" className="outer-city">
        <div className="overlay-city">
        </div>
        <div className=" contain1 animate__animated animate__fadeIn animate__delay-5s " id="contact">
          <h1 className="white-text center text-lighten-2 flow-text title space "> Contact <a
            href="https://www.linkedin.com/in/joshua-crane-911532210/" className="link white-text"> Me </a>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
            <br />
            <span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></h1>
          <form id="javascript_form" className=" space container messenger">

            <div className=" borderMsg center ">

              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="text" placeholder="Message" className="spacing normalText"></textarea>

              {/* <!-- not required, but we'd appreciate it if you'd link to us somewhere on your site --> */}
              <input type="submit" id="js_send" value="Send" className="btn spacing2 white black-text" />
              <p className="white-text">Powered by <a href="https://postmail.invotes.com" target="__blank">PostMail</a></p>
            </div>
            <div className="">
              <ul>
                <li><a className="link borderBotGNo spacing2" href="Joshua.crane.me@gmail.com" target="__blank">Email</a></li>
                <li><a className="link borderBotGNo spacing2" href="https://github.com/Jdogcrane" target="__blank">GitHub</a></li>
                <li><a className="link borderBotGNo spacing2" href="https://www.linkedin.com/in/joshua-crane-911532210/" target="__blank">LinkedIn</a></li>
              </ul>
            </div>
          </form>
        </div>
        <div className="container contain1 space "></div>

      </section>
    </>
  );
}
