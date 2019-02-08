import React, { Component } from 'react';
import './App.css';
import Hello from "./Hello.js";

class App extends Component {
	render() {

		let friends = [
			{ name: "Matt", age: 18 },
			{ name: "Eric", age: 19 },
			{ name: "Tracy", age: 20 },
			{ name: "Skylar", age: 21 },
			{ name: "Melissa", age: 22 },
			{ name: "Keith", age: 23 }
		];

		let helloList = friends.map((friend) => {
			return <Hello key={friend.name} name={friend.name} age={friend.age} />
		});

		return (
			<div>
				<ul>{helloList}</ul>
			</div>
		);
	}
}

export default App;
