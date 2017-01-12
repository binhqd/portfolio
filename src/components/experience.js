import React, { Component } from 'react';

class Experience extends Component {

	constructor(props) {
		super(props);
		this.positions = props.positions;
	}

	render() {

		const experience = this.positions.map((position, index) => {

			const details = position.description.map((paragraph) => {
				return <p>{ paragraph }</p>
			});

			const dateFrom = new Intl.DateTimeFormat('en-US').format(position.period.from);
			const dateEnd = position.period.to ? new Intl.DateTimeFormat('en-US').format(position.period.to) : 'Present';

			return (<div className="item" key={index}>
				<div className="meta">
					<div className="upper-row">
						<h3 className="job-title">{ position.title }</h3>
						<div className="time">{ dateFrom } - { dateEnd }</div>
					</div>
					<div className="company">{ position.company } - { position.location }</div>
				</div>
				<div className="details">
					{ details }
				</div>
			</div>);
		});

		return (
			<section className="section experiences-section">

				<h2 className="section-title">
					<i className="fa fa-briefcase"></i>
					Experience
				</h2>

				{ experience }

            </section>
		);
	}

}

export default Experience;
