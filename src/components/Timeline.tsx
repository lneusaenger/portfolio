import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CPC Academic Advising</h3>
            <h4 className="vertical-timeline-element-subtitle">Academic Tutor</h4>
            <p>
            Tutored students in Programming, Data Structures and Algorithms, SAT Verbal and Math, Statistics, and Calculus, while effectively coordinating with management and students for scheduling and ensuring tailored academic support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2023 - August 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">JP Morgan Chase & Co.</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
            <p>
            Modernized legacy systems, optimized data retrieval processes, and developed a versatile report rendering library using C# and SQL, significantly improving performance and accuracy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - November 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">HYEL, Inc.</h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer and Game Development Intern</h4>
            <p>
            Developed production-ready iOS games, optimized game performance using multi-threading, and designed digital assets and UI for various game proposals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2022 - August 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Transportation Federal Credit Union</h3>
            <h4 className="vertical-timeline-element-subtitle">Information Systems Intern</h4>
            <p>
            Designed and deployed an efficient relational database, developed an employee intranet, and resolved numerous technical issues in a fast-paced environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;