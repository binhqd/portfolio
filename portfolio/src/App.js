import React, { Component } from 'react';
//import Bio from './components/bio';
import Sidebar from './components/sidebar';
import Summary from './components/summary';

const profile = {
	name: 'Ilbert Esculpi',
	picture: 'ilbesculpi.png',
	tagline: 'Full Stack Developer',
	summary: `I am an enthusiastic and motivated software engineer
		with over eight years of professional experience working in a variety of projects.
		My extensive background in PHP frameworks,
		including cakephp and laravel leaves me well suited to design, develop and test
		complex, scalable and maintainable web applications.

		I have a solid background in creating complex mobile applications for iOS and Android.
		I can work independently and respect a deadline.
		I feel comfortable working with a good team of developers.`,
	contact: {
		email: 'ilbert.esculpi@gmail.com',
		phone: {
			display: '+58 412 2982011',
			action: 'tel:+584122982011'
		},
		website: {
			display: 'ilbesculpi.com',
			action: 'http://ilbesculpi.com'
		},
		linkedin: {
			display: 'linkedin.com/in/ilbesculpi',
			action: 'https://www.linkedin.com/in/ilbesculpi'
		},
		github: {
			display: 'github.com/ilbesculpi',
			action: 'https://github.com/ilbesculpi'
		},
		twitter: {
			display: 'ilbesculpi',
			action: 'https://twitter.com/ilbesculpi'
		}
	},
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
			<div className="wrapper">
				<Sidebar profile={profile} />
				<div className="main-wrapper">
					<Summary profile={profile} />
				</div>
			</div>
		);
	}
}

export default App;
