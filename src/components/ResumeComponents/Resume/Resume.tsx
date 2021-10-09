/* eslint-disable react/prop-types */
/* eslint-disable no-var */
import React, { Component, ReactElement } from 'react';
import { Resume as ResumeData } from '..';

class Resume extends Component<ResumeData> {
  render(): ReactElement {
    // if (this.props.data) {
    //   var skillmessage = this.props.data.skillmessage;
    //   var work = this.props.data.work.map(function (work) {
    //     return (
    //       <div key={work.company}>
    //         <h3>{work.company}</h3>
    //         <p className="info">
    //           {work.title}
    //           <span>&bull;</span> <em className="date">{work.years}</em>
    //         </p>
    //         <p>{work.description}</p>
    //       </div>
    //     );
    //   });
    //   var skills = this.props.data.skills.map(function (skills) {
    //     var className = 'bar-expand ' + skills.name.toLowerCase();
    //     return (
    //       <li key={skills.name}>
    //         <span style={{ width: skills.level }} className={className}></span>
    //         <em>{skills.name}</em>
    //       </li>
    //     );
    //   });
    // }
    const { skillmessage, education, work, skills } = this.props;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education && education.length > 0
                  ? education.map(education => {
                      return (
                        <div key={education.school}>
                          <h3>{education.school}</h3>
                          <p className="info">
                            {education.degree} <span>&bull;</span>
                            <em className="date">{education.graduated}</em>
                          </p>
                          <p>{education.description}</p>
                        </div>
                      );
                    })
                  : undefined}
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {work && work.length > 0
              ? work.map(work => {
                  return (
                    <div key={work.company}>
                      <h3>{work.company}</h3>
                      <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                      </p>
                      <p>{work.description}</p>
                    </div>
                  );
                })
              : undefined}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">
                {skills && skills.length > 0
                  ? skills.map(skills => {
                      const className = 'bar-expand ' + skills.name.toLowerCase();
                      return (
                        <li key={skills.name}>
                          <span style={{ width: skills.level }} className={className}></span>
                          <em>{skills.name}</em>
                        </li>
                      );
                    })
                  : undefined}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
