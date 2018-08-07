import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Summary extends Component {
  render() {
    const { profile } = this.props;

    if (!profile.summary) {
      return <div />;
    }

    return (
      <section className="section summary-section">
        <h2 className="section-title">
          <i className="fa fa-user" />
          Summary
        </h2>
        <div className="summary">
          {
            profile.summary.map(item => {
              return (
                <p>{item}</p>
              )
            })
          }
        </div>
      </section>
    );
  }
}

Summary.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Summary;
