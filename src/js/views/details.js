import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";

export const Details = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="parent">
			<div class="wrapper">
        <div class="main-wrapper">
            <section class="section summary-section">
                <div class="d-flex">
                    <span class=" me-2 d-flex justify-content-center align-items-center fa-stack fa-xs bg-dark border-raidus-round"> 
                        <img src="/img/icons8-user-30.png"/>    
                    </span>
                    <h2 class="section-title"> 
                                Career Profile</h2>
                </div>
                <div class="summary">I am an active outdoorsy person who also enjoys being indoors and spending time on
                    the computer.
                    I was a professional bike rider for many years and after that, I have been an insurance adjuster for
                    several years.
                    For quite a while now, I have had an interest in web development. So I decided to jump in and take
                    on web development head on.
                </div>
              
            </section>
            <section class="section experiences-section">
                <div class="d-flex">
                    <span class=" me-2 d-flex justify-content-center align-items-center fa-stack fa-xs bg-dark border-raidus-round"> 
                        <img class="mb-1" src="/img/icons8-suitcase-30.png"/>    
                    </span>
                    <h2 class="section-title"> 
                                Experiences</h2>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">Professional bike rider</h3>
                            <div class="time">2002 - Present</div>
                        </div>
                        <div class="company">Profile Racing</div>
                    </div>
                    <div class="details">Giving our best to please costumers.
                        - Giving recommendations for food and drinks 
                        - Cleaning of FOH
                      </div>
                </div>
            </section>
            <section class="section projects-section">
                <div class="d-flex">
                    <span class=" me-2 d-flex justify-content-center align-items-center fa-stack fa-xs bg-dark border-raidus-round"> 
                        <img src="/img/icons8-archive-30.png"/>    
                    </span>
                    <h2 class="section-title"> 
                                Projects</h2>
                </div>
                <div class="intro">
                    <p>As a recently graduated Web Dev, I don't have a lot of proyects. In time, this list will grow.
                </p>
                </div>
                <div class="item"><span class="project-title">Game Finder</span>- <span class="project-tagline">A responsive website designed for gamers that want to find a game to play.</span><a target="_blank" rel="noopener noreferrer" class="project-link">view live</a></div>

            </section>
            <section class="skills-section section">
                <div class="d-flex">
                    <span class=" me-2 d-flex justify-content-center align-items-center fa-stack fa-xs bg-dark border-raidus-round"> 
                        <img src="/img/icons8-support-30.png"/>    
                    </span>
                    <h2 class="section-title"> 
                        Skills &amp; Proficiency</h2>
                </div>
                <div class="skillset"><div class="item"><h3 class="level-title">Javascript</h3><div class="level-bar"><div class="level-bar-inner" data-level="98%" style="width: 95%;"></div></div></div><div class="item"><h3 class="level-title">React.js</h3><div class="level-bar"><div class="level-bar-inner" data-level="98%" style="width: 95%;"></div></div></div><div class="item"><h3 class="level-title">HTML5 &amp; CSS</h3><div class="level-bar"><div class="level-bar-inner" data-level="98%" style="width: 95%;"></div></div></div><div class="item"><h3 class="level-title">Python</h3><div class="level-bar"><div class="level-bar-inner" data-level="98%" style="width: 75%;"></div></div></div><div class="item"><h3 class="level-title">FlaskSQL</h3><div class="level-bar"><div class="level-bar-inner" data-level="98%" style="width: 75%;"></div></div></div></div>
                {/* <!-- <div class="skillset">No skills specified</div> --> */}
            </section>
        </div>
        <div class="sidebar-wrapper">
            <div class="profile-container"><img class="avatar"
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFWMVa6qahy5Q/profile-displayphoto-shrink_800_800/0/1596661064076?e=1617840000&amp;v=beta&amp;t=QGteJrxLl5jsPF79co8hcdmaHF24LK0Bl-O7cRRhY7g"
                    alt="profile"/>
                <h1 class="name p-0" id="student-profile-name">Mark Mulville</h1>
                <h3 class="tagline">Dedication, learning, caring, helping, active</h3>
            </div>
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="linkedin ml-0">
                        {/* <!-- <i class="fa-brands fa-linkedin"></i> --> */}
                        <img class="fab fa-linkedin" src="/img/icons8-linkedin-20.png"/>
                        {/* <!-- <i class="fab fa-linkedin"></i> --> */}
                         <a
                            href="https://linkedin.com/in/https://www.linkedin.com/in/mark-mulville-5a1b2a85/"
                            target="_blank"
                            rel="noopener noreferrer">https://www.linkedin.com/in/mark-mulville-5a1b2a85/</a></li>
                    <li class="twitter ml-0" id="student-profile-twitter"/>
                       
                    <li class="github ml-0">
                        <img class="fab fa-github" src="/img/icons8-github-20.png"/>
                        {/* <!-- <i class="fab fa-github"></i> --> */}
                        <a href="http://github.com/84mulville"
                            target="_blank" rel="noopener noreferrer">github.com/84mulville</a></li>
                </ul>
            </div>
            <div class="education-container container-block">
                <h2 class="container-block-title"> Education</h2>
                <div class="item"><h4 class="degree">Full Stack Develpor</h4><h5 class="meta">4 Geeks Academy</h5><div class="time">2020 - 2021</div></div>
                {/* <!-- No education provided --> */}
            </div>
            <div class="languages-container container-block">
                <h2 class="container-block-title"> Languages</h2>
                <ul class="list-unstyled interests-list">
                    <li class="ml-0"> English <span class="lang-desc">(Native)</span></li>
                </ul>
            </div>
            <div class="interests-container container-block">
                <h2 class="container-block-title"> Interests</h2>
                <ul class="list-unstyled interests-list">
                    <li class="ml-0"> Riding bmx </li>
                    <li class="ml-0"> Health &amp; wellness </li>
                    <li class="ml-0"> Suring </li>
                </ul>
            </div>
        </div>
    </div>
		</div>
	);
};
