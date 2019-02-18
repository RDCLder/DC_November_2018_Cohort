import React, { Component } from 'react';
import Project from "./Project.js";
import AddProject from "./AddProject.js";

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.state = {
			projects: [
				{
					title: 'Dating App',
					category: 'Front-End'
				},
				{
					title: 'School CRM',
					category: 'Full-Stack'
				},
				{
					title: 'E-Commerce',
					category: 'React-Redux'
				}
			]
		}
	}

	render() {

		return (
			<div>
				<Projects project={this.state.project} />
			</div>
		);
	}
}

export default App;
