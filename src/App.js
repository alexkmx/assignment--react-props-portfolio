import React, {Component} from 'react';
import Skills from './skills';
import EduList from './edulist';
import JobsList from './jobslist';

class App extends Component {
  render() {

    let herListSkills = this.props.herSkills.map(function(obj) {

        return <Skills item={obj} />
    });

    let herEduList = this.props.herEdu.map(function(edu) {

      let edIns = edu.institute
      let filStu = edu.fieldOfStudy
      let eduDates = edu.dates

        return <EduList inst={edIns} field={filStu} date={eduDates} />
    });

    let herJobsList = this.props.herJobs.map(function(jobs) {

      let jobsTitl = jobs.title;
      let jobsComp = jobs.company;
      let jobsDesc = jobs.description;
      let jobsStartYears = jobs.years.start;
      let jobsEndYears = jobs.years.end;

        return <JobsList joti={jobsTitl}
         joco={jobsComp} jode={jobsDesc}
         jostye={jobsStartYears} joenye={jobsEndYears} />
    });

      return (

      <div id="app-container">
        <section>
          <h4>Skills</h4>
            <div className="skills-list">
              {herListSkills}
            </div>
        </section>

        <section>
          <h4>Education</h4>
            <div class="degree-list">

              {herEduList}

            </div>
        </section>

        <section>
          <h4>Work Experience</h4>
            <div class="job-timeline">
              {herJobsList}
            </div>
        </section>
      </div>
    )
  }
}

export default App;
