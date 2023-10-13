import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css';

class ExperiencePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          id: 1,
          title: 'AI Collaborator',
          company: 'OMDENA',
          startDate: 'Sep 2023',
          endDate: 'Present',
          description: ' Collaborated on the development of an AI-powered early warning system for floods and earthquakes in vulnerable regions of Nigeria, leveraging Python and machine learning algorithms to analyze real-time data from seismic and weather sensors.',
        },
        {
          id: 2,
          title: 'Software Engineer Intern',
          company: 'FPT CORPORATION',
          startDate: 'May 2023',
          endDate: 'Sep 2023',
          description: 'Web-scraped nationwide business data, developed a credit score prediction model with a REST API and Flask web app, fine-tuned a chatbot with NVIDIA Nemo, and collaborated on a text classification pipeline with a team of developers.',
        },
        {
          id: 3,
          title: 'Data Science Intern',
          company: 'ERNST & YOUNG',
          startDate: 'June 2022',
          endDate: 'Aug 2022',
          description: 'Assisted in designing Random Forest fraud prediction models, performed data extraction, transformation, and analysis on payment fraud datasets, and improved database performance through SQL query optimization.',
        },
        {
          id: 3,
          title: 'Data Science Intern',
          company: 'KPIM JOINT STOCK',
          startDate: 'June 2022',
          endDate: 'Aug 2022',
          description: 'Extracted, transformed, analyzed sales data and built ML models with Python and SQL. Built React/HTML/CSS front-end website.',
        },
        {
          id: 3,
          title: 'Software Engineer Intern',
          company: 'DTND SOFTWARE SOLUTION CO',
          startDate: 'June 2021',
          endDate: 'Aug 2021',
          description: 'Developed React JS front-end web apps. Performed JUnits and manual test cases, detected and fixed bugs.',
        },
      ],
    };
  }

  render() {
    return (
      
      <div id = "experience-section" className="experience-page">
        <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>My Experience</h1>
        <VerticalTimeline>
          {this.state.experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.id}
              className={`vertical-timeline-element--work ${
                index % 2 === 0 ? 'vertical-timeline-element--right-aligned' : 'vertical-timeline-element--left-aligned'
              }`}
              contentStyle={{ background: '#d2d4c8', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #376996' }}
              iconStyle={{ background: '#bfc8ad', color: '#fff' }}
              icon={<i className="fa fa-briefcase" />}
            >
              <div className="timeline-content">
                <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#564e58'}}>{experience.company}</h4>
                <p style={{ color: '#564e58' }}>{experience.location}</p>
                <p style={{ color: '#564e58' }}>{experience.description}</p>
              </div>
              <p className="vertical-timeline-element-date">{experience.startDate} - {experience.endDate}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}


export default ExperiencePage;
