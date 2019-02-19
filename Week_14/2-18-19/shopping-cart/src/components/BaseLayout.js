import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import "../styles/BaseLayout.css";

class BaseLayout extends React.Component {

    render() {

        let products = [
            { productName: "Apples", productPrice: 1.50 },
            { productName: "Bananas", productPrice: 2.00 },
            { productName: "Oranges", productPrice: 3.50 },
            { productName: "Strawberries", productPrice: 2.00 },
            { productName: "Grapes", productPrice: 3.00 }
        ];

        return (
            <Container>

                {/* Header */}
                <Row className="headerRow justify-content-between">
                    <h2>Shopping Cart</h2>
                    <i class="fas fa-shopping-cart"></i>
                </Row>

                {/* Body */}
                <Row className="mainRow">
                    <Col className="leftCol">
                        <h4>Available Products</h4>
                        {products.map(product => {
                            return <Product className="productRow" key={product.productName} productName={product.productName} productPrice={product.productPrice} />
                        })}
                    </Col>

                    <Col className="rightCol">
                        <h4>Your Cart</h4>
                        <Row>
                            <Col><h5>Product</h5></Col>
                            <Col><h5>Amount</h5></Col>
                            <Col><h5>Price</h5></Col>
                            <Col><h5>Options</h5></Col>
                        </Row>
                        {this.props.children}
                    </Col>
                </Row>

                {/* Footer */}
                <Row className="footerRow">

                </Row>

            </Container>
        );
    }
}

export default BaseLayout;