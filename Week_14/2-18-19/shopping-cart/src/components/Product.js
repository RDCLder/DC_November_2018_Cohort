import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from "react-bootstrap";
import "../styles/Product.css";
import {connect} from "react-redux";
import actionAddProduct from "../actions/actionAddProduct";
import actionRemoveProduct from "../actions/actionRemoveProduct";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: this.props.productName,
            productPrice: this.props.productPrice
        }
    }

    render() {
        return (
            <div>
                <Row className="productRow">
                    <Col>{this.state.productName}</Col>
                    <Col>${this.state.productPrice}</Col>
                    <Col>
                    <button className="addCartButton"
                        onClick={() => this.props.eventAddProduct({
                            productName: this.state.productName,
                            productPrice: this.state.productPrice
                        })}>Add to Cart</button>
                    </Col>
                </Row>
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
        eventAddProduct: (product) => dispatch(actionAddProduct(product)),
        eventRemoveProduct: (product) => dispatch(actionRemoveProduct(product))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Product);