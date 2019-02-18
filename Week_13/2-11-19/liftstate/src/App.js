import React from 'react';
import PropTypes from 'prop-types';
import H1 from "./H1.js";
import H2 from "./H2.js";
import H3 from "./H3.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: "",
			click: 0
		}
	}

	updateClickCount() {
		this.setState({
			click: this.state.click + 1
		})
	}

	reset() {
		this.setState({
			click: 0
		})
	}

	render() {
		return (
			<div>
				<H1 />
				<H2 clickCount={this.state.click} onReset={this.reset.bind(this)} />
				<H3 onClickProp={this.updateClickCount.bind(this)}/>
			</div>
		);
	}
}


App.propTypes = {

};

export default App
