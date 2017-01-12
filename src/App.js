import React, { Component } from 'react';
//import Bio from './components/bio';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import Skills from './components/skills';
import Experience from './components/experience';

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
			I really care about clean code, code refactor and good practices.`
	],
	contact: {
		email: {
			display: 'ilbert.esculpi@gmail.com',
			action: 'mailto:ilbert.esculpi@gmail.com'
		},
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
		frontend: {
			tools: [
				{
					title: 'HTML5 & javascript',
					level: 80
				},
				{
					title: 'Bootstrap & Foundation',
					level: 88
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
			extra: ['bower', 'npm', 'gulp']
		},
		backend: {
			tools: [
				{
					title: 'Laravel',
					level: 96
				},
				{
					title: 'CakePHP',
					level: 90
				},
				{
					title: 'Node.js',
					level: 60
				},
				{
					title: '.NET',
					level: 40
				}
			],
			extra: ['Memcache', 'Codeception', 'Elasticsearch', 'Mongodb', 'MySQL']
		},
		mobile: {
			tools: [
				{
					title: 'ionic & cordova',
					level: 90
				},
				{
					title: 'iOS',
					level: 85
				},
				{
					title: 'Android',
					level: 65
				}
			],
			extra: ['Fabric', 'Appium']
		}
	},
	experience: [
		{
			title: 'Project Team Lead',
			company: 'Bee Concept Solutions',
			location: 'Caracas, Venezuela',
			period: {
				from: new Date(2015, 7, 1),
				to: null
			},
			description: [
				`Working with other key members on projects to come up with the goals,
					objectives and achieve the milestones.
					Play a key role in constantly improving best practices, coding conventions and adoption of tools or technologies.
					Tutoring 3-5 junior and senior developers to ensure software quality and keep projects on schedule.`
			]
		},
		{
			title: 'Senior Developer',
			company: 'Bee Concept Solutions',
			location: 'Caracas, Venezuela',
			period: {
				from: new Date(2013, 8, 1),
				to: new Date(2015, 6, 30)
			},
			description: [
				`As a Senior Developer, I worked as a web and mobile developer for the company,
					creating a codebase for common problems and documenting recurring scenarios. Most
					of the web projects are created using CakePHP or laravel framework and the mobile
					projects are native implementations in XCode (iOS) and Eclipse / Android Studio
					(Android) or hybrid applications using phonegap and ionic.`
			]
		},
		{
			title: 'Senior Developer',
			company: 'Nova Tecnología Creativa',
			location: 'Caracas, Venezuela',
			period: {
				from: new Date(),
				to: new Date()
			},
			description: [
				`Create user information solutions by developing, implementing,
					and maintaining Internet/intranet/mobile applications using different technologies.`,
				`Develop applications by coordinating requirements, schedules, and activities;
					contributing to team meetings;
					troubleshooting development and production problems across multiple environments and operating platforms.`,
				`Supports and develops web application developers by providing advice, coaching and educational opportunities.`
			]
		}
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
					<Experience positions={profile.experience} />
					<Skills skills={profile.skills} />
				</div>
			</div>
		);
	}
}

export default App;
