import React, {Component} from 'react';

  class JobsList extends Component {
    render() {

      let jobsTitl = this.props.joti;
      let jobsCompa = this.props.joco;
      let jobsDescri = this.props.jode;
      let jobsStarYea = this.props.jostye;
      let jobsEndYea = this.props.joenye;

      return (

        <div class="job">
          <div class="job__years">
            <h6 class="job__end">{jobsEndYea}</h6>
            <h6 class="job__start">{jobsStarYea}</h6>
          </div>
            <h5 class="job__title">{jobsTitl}</h5>
            <h5 class="job__company">{jobsCompa}</h5>
            <p class="job__description">{jobsDescri}</p>
        </div>
      )
    }
  }

  export default JobsList;
