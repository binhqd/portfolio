import React, { Component } from 'react';
//import Bio from './components/bio';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import Skills from './components/skills';

const profile = {
	name: 'Ilbert Esculpi',
	picture: 'ilbesculpi.png',
	tagline: 'Full Stack Developer',
	summary: [
		`I am an enthusiastic and motivated software engineer
			with over eight years of professional experience working in a variety of projects and technologies.
			My extensive background in PHP frameworks,
			including cakephp and laravel leaves me well suited to design, develop and test
			complex, scalable and maintainable web applications.`,
		`I also have a solid background in creating complex mobile applications for iOS and Android, both native and hybrid.
			I can work independently and respect a deadline.
			I feel comfortable working with a good team of developers.`
	],
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
	skills: {
		frontend: [
			{
				title: 'HTML5 & javascript',
				level: 80
			},
			{
				title: 'Angular',
				level: 70
			},
			{
				title: 'React',
				level: 50
			}
		],
		backend: [
			{
				title: 'Laravel',
				level: 95
			},
			{
				title: 'CakePHP',
				level: 95
			},
			{
				title: 'Node',
				level: 60
			},
			{
				title: '.NET',
				level: 40
			}
		],
		mobile: [
			{
				title: 'iOS',
				level: 80
			},
			{
				title: 'Android',
				level: 60
			},
			{
				title: 'ionic & phonegap',
				level: 80
			}
		]
	}
};

class App extends Component {
	render() {
		const style = { padding: 0 }
		return (
			<div className="wrapper">
				<Sidebar profile={profile} />
				<div className="main-wrapper">
					<Summary profile={profile} />
					<Skills skills={profile.skills} />
				</div>
			</div>
		);
	}
}

export default App;
