import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {

	constructor(props) {
		super(props);
		this.history = props.history;
	}

	render() {
		return (
			<div>
				Home Page
			</div>
		);
	}
}

export default App;
