import '../../Styles/Template.css';
import { Row, Col } from 'react-materialize';

export default function Resume() {

	return (

		<div className="padding-resume">

			<div className="resume_wrapper space animate__animated animate__slideInUp animate__delay-1s">
				<div className="resume_left">

					<div className="resume_bottom">
						<div className="resume_item  resume_namerole">
							<div className="name center">Joshua Crane</div>
							<div className="role center">Full Stack Web Developer - Age: 22</div>
							<div className="right ">
								<div className="email ">joshua.crane.me@gmail.com</div>
								<div className="role ">(704)369-3265</div>
							</div>
						</div>
						<div className="resume_item resume_profile">
							<div className="resume_title">Profile</div>
							<div className="resume_info">Fullstack Web Developer that has a proven knowledge of multiuser interface, web design, and web page content. Aiming to leverage my skills to successfully fill the Junior UI/UX Design role at your company.</div>
						</div>
						<div className="resume_item resume_address">
							<div className="resume_title">Address</div>
							<div className="resume_info">
								4408 Peach Rd,<br />
								23321 Chesapeake,<br />
								VA, United States
							</div>
						</div>

						<div className="borderBotBNo  resume_skills skills_bar">
							<div className="resume_title center borderBotBNo">What I learned</div>
							<div className="resume_title">Front End</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">Materialize</div>
									<div className="skills_bar">
										<p>
											Bootstrap
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Bulma</div>
									<div className="skills_bar">
										<p>
											HTML/CSS
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Javascript</div>
									<div className="skills_bar">
										<p>
											jQuery
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">APIs</div>
									<div className="skills_bar">
										<p>
											AJAX
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Handlebars</div>

								</div>
							</div>
						</div>
						<div className="borderBotBNo resume_item resume_skills skills_bar">
							<div className="resume_title">Back End</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">MySQL</div>
									<div className="skills_bar">
										<p>
											Jest Testing
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Node</div>
									<div className="skills_bar">
										<p>
											Sequelize
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">Error Handling</div>
									<div className="skills_bar">
										<p>
											Heroku
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="borderBotBNo resume_item resume_skills skills_bar">
							<div className="resume_title">Performance</div>
							<div className="resume_info">
								<div className="skills_list">
									<div className="skills_left">PWA</div>
									<div className="skills_bar">
										<p>
											MERN
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">React</div>
									<div className="skills_bar">
										<p>
											MongoDB
										</p>
									</div>
								</div>
								<div className="skills_list">
									<div className="skills_left">SEO</div>
								</div>
							</div>
						</div>
						<div className=" ">
							<div className="resume_title spacing2">Projects</div>

							<div className="resume_data">
								<div className="content">
									<strong>Covid & Cats</strong>
									<br />
									<p classNameName="p-res">A website that grabs data from the entire USA with a few clicks using an API while also supplying Cat Gif's for comfort.
										Designed and built using Materialize framework</p>
									<p> <a className="link borderBotBNo black-text" href="https://jdogcrane.github.io/covid-and-cats/" target="__blank">CovidandCats.com</a></p>
								</div>
							</div>
							<div className="resume_data">
								<br />
								<div className="content">
									<strong>Forum Friends</strong>
									<br />
									<p classNameName="p-res">A social media platform with login authentication and stored data in MongoDB built using Materialize framework.</p>
									<p> <a className="link borderBotBNo black-text" href="https://forum-friends.herokuapp.com/" target="__blank">Forum-Friends.com</a></p>
								</div>
							</div>
							<div className="resume_data">
								<br />
								<div className="content">
									<strong>Rapid Resume</strong>
									<br />
									<p classNameName="p-res"> A Fully react website storing user data in mongoDB using a authentication login and Bulma as the framework. Allowing for a fast and easy resume builder for free.  </p>
									<p> <a className="link borderBotBNo black-text" href="https://rapid-resume.herokuapp.com/" target="__blank">Rapid-Resume.com</a></p>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className="resume_right">
					<div className="resume_item resume_namerole">
						<div className=" right">
							<div className="role">(704)369-3265</div>
							<div className="email">joshua.crane.me@gmail.com</div>
						</div>
						<div className="name">Joshua Crane</div>
						<div className="role">Full Stack Web Developer - Age: 22</div>
					</div>
					<div className="resume_item resume_education">
						<div className="resume_title">Education</div>
						<div className="resume_info">
							<div className="resume_data">
								<div className="year">1999</div>
								<div className="content">
									<p>Home Schooled</p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year">2017</div>
								<div className="content">
									<p> <a className="link-black black-text" href="https://www.keysofva.org/" target="__blank">Kingdom Education for Young Scholars - Co-op</a></p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year">2021</div>
								<div className="content">
									<p> <a className="link-black black-text" href="https://bootcamp.uncc.edu/coding/" target="__blank">University of North Carolina Charlotte</a></p>
									<p>Full Stack Web Developer Program &ndash; <strong>4.0 GPA</strong> </p>
								</div>
							</div>
						</div>
					</div>

					<div className="resume_item_custom resume_experience">
						<div className="resume_title">Work History</div>
						<div className="resume_info">
							<div className="resume_data">
								<div className="year">2016</div>
								<div className="content">
									<strong>Summer Jobs</strong>
									<br />
									<p classNameName="p-res">• Accountant and Helper at Biernot Flooring - 2016 <br /> • Part Time Construction for Mid Atlantic - 2017</p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year">2017</div>
								<div className="content">
									<strong>FoodLion</strong>
									<br />
									<p classNameName="p-res">Grocery Associate <br /> • Team of 4-6 <br /> • Day and night shifts <br /> • Fast paced</p>
								</div>
							</div>
							<div className="resume_data">
								<div className="year">2018</div>
								<div className="content">
									<strong>Foodlion</strong>
									<br />
									<p classNameName="p-res">Direct Store Delivery (DSD) Receiver <br /> • Responsible for auditing received shipments to insure quality and price meets requirements</p>

								</div>

							</div>
							<div className="resume_data">
								<div className="year">2020</div>
								<div className="content">
									<strong>Foodlion</strong>
									<br />
									<p classNameName="p-res"> Grocery Team Lead & (DSD) Receiver <br /> • Responsible for leading, inspiring, teaching a team of 6 to efficiently unload and stock hundreds of large shipments.
										<br /> • Fast paced
										<br /> • Team Management
										<br /> • Long Days
										<br /> • 40+hrs/Week</p>
								</div>

							</div>
							<div className="resume_data borderBotBNo">
								<div className="year">2021</div>
								<div className="content">
									<strong>The Next Path</strong>

								</div>
							</div>
						</div>
						<p className=" resume_title center spacing2">References</p>
						<Row className="spaceSmall">
							<Col
								className="  "
								s={12}
								m={6}
								l={4}
							>
								<div className="center borderTop">

									<p><strong>Anthony Cooper</strong></p>
									<p>UNCC Lead Web Development Instructor</p>
									<p>312.835.6451</p>

								</div>

							</Col>
							<Col
								className="black-text "
								s={12}
								m={6}
								l={4}
							>
								<div className="center borderTop">

									<p><strong>Mitch Hendrix</strong></p>
									<p>FoodLion Store Manger</p>
									<p>704.333.1227</p>
								</div>

							</Col>
							<Col
								className="black-text "
								s={12}
								m={12}
								l={4}
							>
								<div className="center borderTop">

									<p><strong>Joe Abrams</strong></p>
									<p>FoodLion Assistant Store Manger</p>
									<p>980.234.1052</p>
								</div>

							</Col>
							<Col
								className="black-text spaceResumeFooter "
								s={12}
								m={12}
								l={12}
							>
								<div className=" center italic borderTopBNo">
									<p>Joshua Crane - (704)369-3265 - joshua.crane.me@gmail.com</p>
								</div>

							</Col>
						</Row>
					</div>
				</div>
			</div>
			<div className="container center">
			<button className="btn white black-text" onClick={() => window.print()}>Print this page</button>

			</div>
			<div className=" contain1 animate__animated animate__fadeIn space1 spaceDown2 animate__delay-5s ">
				<h1 className="Black-text center text-lighten-2 flow-text title borderTop">Become My<span> Next</span> <a
					href="https://www.linkedin.com/in/joshua-crane-911532210/" className="link black-text"> Path </a>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-1s animate__infinite"> .</span>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-2s animate__infinite"> .</span>
					<br />
					<span className="animate__animated animate__fadeIn animate__delay-3s animate__infinite"> .</span></h1>
				<form id="javascript_form" className=" container messenger">

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
		</div>

	);

}
