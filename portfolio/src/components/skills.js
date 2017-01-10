import React, { Component } from 'react';

class Skills extends Component {

	constructor(props) {
		super(props);
		this.skills = props.skills;
	}

	render() {

		const template = function(skill, index) {
			return (<div className="item" key={index}>
				<h3 className="level-title">{ skill.title }</h3>
				<div className="level-bar">
					<div className="level-bar-inner" data-level={ skill.level + '%' }></div>
				</div>
			</div>);
		};

		const skillSetFrontend = this.skills.frontend.map(template);
		const skillSetBackend = this.skills.backend.map(template);
		const skillSetMobile = this.skills.mobile.map(template);

		return (
			<section className="skills-section section">
                <h2 className="section-title">
					<i className="fa fa-rocket"></i>
					Skills &amp; Proficiency
				</h2>
				<h3>Frontend</h3>
                <div className="skillset">
					{ skillSetFrontend }
                </div>
				<h3>Backend</h3>
				<div className="skillset">
					{ skillSetBackend }
                </div>
				<h3>Mobile</h3>
				<div className="skillset">
					{ skillSetMobile }
                </div>
            </section>
		);
	}

}

export default Skills;
