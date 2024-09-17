import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>My Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>iOS Reading Tracker App</h2>
                <p>Developed an app allowing account creation, searching and shelving of books, reading goal setting, rating and reviewing of books, and displays every current NYT Bestseller. Created using <b>Google Books API, NYT API, Swift, and Figma.</b></p>
            </div>
            <div className="project">
                <a href="https://github.com/lneusaenger/bookclub-frontend" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lneusaenger/bookclub-backend" target="_blank" rel="noreferrer"><h2>Duke Amateurs Book Club Website</h2></a>
                <p>Developed a website for shelving books, leaving reviews, and lending books between members of the club. Used <b>React, Node.js, Express.js, MongoDB, Google Books API, and Javascript</b>.</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/EaXCHAeUxvM" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/watch?v=S31Kqxk33hM&themeRefresh=1" target="_blank" rel="noreferrer"><h2>Heartcoded Dating Application</h2></a>
                <p>Used <b>Javascript, RubyOnRails, PostgreSQL, React.js, and LLaMA AI</b> integration to create a dating application with profile creation, tailored matching, live chatting, and a snarky AI wingman.</p>
            </div>
            <div className="project">
                <a href="https://www.howyoufeel.io/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.howyoufeel.io/" target="_blank" rel="noreferrer"><h2>Memory Matching Minigame</h2></a>
                <p>Pitched, prototyped, designed, architectured, developed, and tested a memory matching game using <b>Figma, XCode, GameKit, and Swift</b>. The game was featured in the HYEL social media app. </p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Multivariate Drinking Frequency Predictive Model</h2>
                <p>Conducted <b>visualization, ANOVA hypothesis testing, AIC variable selection, logistic regression, training, and testing</b> on the OKCupid datset consisting of over 60k records of including 31 variables. Created an ordinal predictive model that predicted users' drinking habits with up to 70% accuracy.</p>
            </div>
            <div className="project">
                <a href="https://www.howyoufeel.io/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.howyoufeel.io/" target="_blank" rel="noreferrer"><h2>Word Search Minigame</h2></a>
                <p>Pitched, prototyped, designed, architectured, developed, and tested a word search minigame using <b>Figma, XCode, GameKit, and Swift</b>. This is featured in the HYEl social media games app.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Flappy Bird</h2>
                <p>Created Flappy Bird copycat in <b>Unity, coded in C#</b>. Allows score-keeping, replayability, and storing one's high score.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Predictive Linear Regression Model for COVID-19 Cases in U.S. Prisons</h2>
                <p>Conducted <b>data cleaning, visualization, and linear and logistic regression</b> to compare the effects of over 18 variables on the COVID-19 cases reported in 2,639 U.S. prison facilities. Created a linear model with relatively low r^2, indicating that the variables in the dataset are not sufficient predictors.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;