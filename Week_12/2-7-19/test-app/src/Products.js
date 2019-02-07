import React from 'react';

class Products extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {

        let products = [
            "milk",
            "cheese",
            "bread",
            "eggs",
            "chicken"
        ];

        let productList = products.map((product) => {
            return <li>{product}</li>
        })

        return (
            <div>
                <h1>{this.props.title}</h1>
            <ul>
                {productList}
            </ul>
            </div>
        );
    }
}

export default Products;