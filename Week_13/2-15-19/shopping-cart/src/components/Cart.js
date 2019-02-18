import React from 'react';
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";
import deleteProduct from "../actions/deleteProduct";
import Product from "./Product";

class Cart extends React.Component {

    render() {

        return (
            <div>
                <Product />

                <h2>Total Price: {this.props.totalCost}</h2>
                <table>
                    <thead>
                        <tr>
                            <td>
                                Product Name
                            </td>
                            <td>
                                Product Price
                            </td>
                            <td>
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.productCart.map((item) => {
                                return <tr key={item.productName}>
                                    <td>{item.productName}</td>
                                    <td>{item.productPrice}</td>
                                    <td onClick={(item) => this.props.onDeleteProduct(item)}>Remove</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

                <br />
                {this.props.totalCost}
                <br />
                {this.props.produ}
                <button> onClick={this.props.onAddProduct()}Click Me</button>
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
        onAddProduct: (item) => dispatch(addProduct(item)),
        onDeleteProduct: (item) => dispatch(deleteProduct(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
