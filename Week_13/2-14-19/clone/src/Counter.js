import React from 'react';
import counterAction from "../src/counterAction.js";
import { Provider, connect } from "react-redux";

function counterReducer(state = { count: 0 }, action) {
    const count = state.count;

    switch (action.type) {
        case "INCREMENT":
            return {
                count: count + 1
            };
        case "DECREMENT":
            return {
                count: count - 1
            };
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
}

// Maps State to Props
function mapStateToProps(state) {
    return {
        storeCount: state.count
    };
}

// Maps Dispatches to Props
function mapDispatchToProps(dispatch) {
    return {
        incrementClick: () => dispatch(incrementAction),
        decrementClick: () => dispatch(decrementAction),
        resetClick: () => dispatch(resetAction)
    };
}

render() {
    return (
        <div>
            <button onClick={this.props.decrementClick}>-</button>
            <span>{this.props.storeCount}</span>
            <button onClick={this.props.incrementClick}>+</button>
            <br></br>
            <button onClick={this.props.resetClick}>Reset</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
