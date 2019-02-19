import React from 'react';
import { connect } from "react-redux";
import actionAddProduct from "../actions/actionAddProduct";
import actionRemoveProduct from "../actions/actionRemoveProduct";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Cart.css";

class Cart extends React.Component {

    render() {
        return (
            <div>

                {
                    this.props.productCart.map((product) => {
                        return <Row className="cartRow" key={product.productName}>
                            <Col>{product.productName}</Col>
                            <Col>x 1</Col>
                            <Col>${product.productPrice}</Col>
                            <Col>
                            <button onClick={() => this.props.eventRemoveProduct(product)}>Remove</button>
                            </Col>
                        </Row>
                    })
                }
                <h5>Total Price: ${this.props.totalCost}</h5>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        eventAddProduct: (product) => dispatch(actionAddProduct(product)),
        eventRemoveProduct: (product) => dispatch(actionRemoveProduct(product))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);