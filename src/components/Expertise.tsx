import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "C/C++/C#",
    "Python",
    "Go",
    "SQL",
    "MongoDB",
    "Firebase/Supabase",
    "REST API",
    "XML",
    "Docker",
    "AWS"
];

const labelsSecond = [
    "JavaScript",
    "TypeScript",
    "Swift",
    "HTML & CSS",
    "React.js",
    "React Native",
    "Next.js",
    "Express.js",
    "Node.js",
    "GitHub",
    "Unity",
    "Bootstrap"
];

const labelsThird = [
    "Pandas",
    "Jupyter",
    "Python",
    "R",
    "SQL",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Bayesian Statistics",
    "Regression Analysis",
    "Hypothesis Testing",
    "Multivariate Analysis"
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

            <div className="skill">
                <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack & Mobile Development</h3>
                    <p>With expertise in building full-stack web applications and production-ready iOS applications, Lily has a diverse skill set ranging from frontend technologies like React.js and Next.js to backend systems using PostgreSQL, MongoDB, and RESTful APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Software & System Modernization</h3>
                    <p>Lily has successfully modernized legacy systems and enhanced performance across large-scale projects, using languages like C#, Swift, and Go, while optimizing data retrieval and streamlining workflows in high-impact environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Statistical Analysis</h3>
                    <p>Through her courseowrk and projects, Lily has demonstrated a strong ability to draw meaningful conclusions on datasets with a strong understanding of various sampling distributions, Bayesian statistics, methods of data analysis, and statistical computing techniques.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;