import React, {Component } from 'react';
import Skills from './skills';


class App extends Component {
  render() {

      let herListSkills = this.props.herSkills.map(function(obj) {

        return <span className="skills-list__single">{obj} </span>
      })
    return (
      <div id="app-container">
      <section>
        <h4>Skills</h4>
      <div className="skills-list">
        {herListSkills}
      </div>
      </section>
      </div>
    )
  }
}

export default App;
