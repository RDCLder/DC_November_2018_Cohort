import React from 'react';
import {connect} from "react-redux";
import addProduct from "../actions/addProduct";
import deleteProduct from "../actions/deleteProduct";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0
        }
    }

    productNameChange(e) {
        this.setState({
            productName: e.target.value
        })
    }

    productPrieChange(e) {
        this.setState({
            productPrice: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.productName}
                <br/>
                <input type="text" placeholder="Product Name" onChange={(e) => this.productNameChange(e)} />
                <input type="text" placeholder="Product Price" onChange={(e) => this.productPriceChange(e)} />
                <br/>
                {this.state.productPrice}

                <button onClick={() => this.props.onAddProduct({
                    productName: this.state.productName,
                    productPrice: this.state.productPrice
                })}>Add Product</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddProduct: (data) => dispatch(addProduct(data)),
        onDeleteProduct: (data) => dispatch(deleteProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
