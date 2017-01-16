import React, { Component } from 'react';

class Summary extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		console.log('Summary::render()');

		var profile = this.props.profile;

		if( !profile.summary ) {
			return <div></div>
		}

		return (
			<section className="section summary-section">
                <h2 className="section-title">
					<i className="fa fa-user"></i>
					Career Profile
				</h2>
                <div className="summary">
                    <p>{ profile.summary[0] }</p>
					<p>{ profile.summary[1] }</p>
					<p>{ profile.summary[2] }</p>
                </div>
            </section>
		);
	}

}

export default Summary;
