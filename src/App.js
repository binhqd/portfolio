import React, { Component } from 'react';
//import Bio from './components/bio';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import Skills from './components/skills';
import Experience from './components/experience';

class App extends Component {

	constructor(props) {
		super();
		this.props = props;
		this.state = {
			profile: {
				skills: []
			},
			experience: []
		};
	}

	componentDidMount() {
		this.fetchProfile();
	}

	fetchProfile() {

		fetch("data/profile.json")
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log('got the profile!');
				console.log(json);
				this.setState({
					profile: json
				});
			});

		fetch("data/experience.json")
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log('got the experience!');
				console.log(json);
				this.setState({
					experience: json
				});
			});
	}

	render() {
		console.log('App::render()');
		return (
			<div className="wrapper">
				<Sidebar profile={ this.state.profile } />
				<div className="main-wrapper">
					<Summary profile={ this.state.profile } />
					<Experience positions={ this.state.experience } />
					<Skills skills={ this.state.profile.skills } />
				</div>
			</div>
		);
	}

}

export default App;
