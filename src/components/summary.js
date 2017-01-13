import React, { Component } from 'react';

class Summary extends Component {

	constructor(props) {
		super(props);
		this.profile = props.profile;
	}

	render() {

		if( !this.profile.summary ) {
			return <div></div>
		}

		return (
			<section className="section summary-section">
                <h2 className="section-title">
					<i className="fa fa-user"></i>
					Career Profile
				</h2>
                <div className="summary">
                    <p>{ this.profile.summary[0] }</p>
					<p>{ this.profile.summary[1] }</p>
                </div>
            </section>
		);
	}

}

export default Summary;
