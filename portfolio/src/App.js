import React, { Component } from 'react';
import './App.css';
import Bio from './components/bio';
import Sidebar from './components/sidebar';

const profile = {
	name: 'Ilbert Esculpi',
	picture: 'ilbesculpi.png',
	bio: `Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit.
		You can download this free resume/CV template here.
		Aenean commodo ligula eget dolor aenean massa.
		Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		Donec quam felis, ultricies nec, pellentesque eu.`,
	skills: [
		'frontend',
		'backend',
		'javascript',
		'mobile'
	]
};

class App extends Component {
	render() {
		const style = { padding: 0 }
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-8 col-sm-9">
						<Bio profile={profile} />
					</div>
					<div className="col-xs-4 col-sm-3" style={style}>
						<Sidebar profile={profile} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
