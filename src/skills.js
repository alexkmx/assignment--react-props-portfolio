import React, {Component} from 'react';

class Skills extends Component {
  render() {

    let susDatos = this.props.item

      return (
        <span className="skills-list__single">{susDatos}</span>
      )
    }
}

export default Skills;
