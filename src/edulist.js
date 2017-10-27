import React, {Component} from 'react';

class EduList extends Component {
  render() {

    let ins = this.props.inst;
    let fil = this.props.field;
    let dat = this.props.date;

    return (
      <div class="degree">
        <h5 class="degree__institute">{ins}</h5>
        <p class="degree__field">{fil}</p>
        <p class="degree__dates">{dat}</p>
      </div>
    )
  }
}

export default EduList;
