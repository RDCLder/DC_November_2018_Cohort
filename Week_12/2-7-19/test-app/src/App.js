import React, { Component } from 'react';
import Products from "./Products";

class App extends Component {
	render() {
		
		let products = [
            "milk",
            "cheese",
            "bread",
            "eggs",
            "chicken"
        ];

		return (
			<div>
				<Products/>
			</div>
    );
	}
}

export default App;