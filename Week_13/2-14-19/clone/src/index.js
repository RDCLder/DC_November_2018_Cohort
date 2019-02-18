import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// --------------------------------------------------------------------------------------------------
// INITIALIZATION
// --------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------
// COUNTER COMPONENT 
// --------------------------------------------------------------------------------------------------

class Counter extends React.Component {

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
}

// --------------------------------------------------------------------------------------------------
// COUNTER ACTIONS
// --------------------------------------------------------------------------------------------------

const incrementAction = {
    type: "INCREMENT"
}

const decrementAction = {
    type: "DECREMENT"
}

const resetAction = {
    type: "RESET"
}

// --------------------------------------------------------------------------------------------------
// COUNTER REDUCER
// --------------------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------------------------
// MAPPING
// --------------------------------------------------------------------------------------------------

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

// Connect mapping to App component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

// --------------------------------------------------------------------------------------------------
// RENDER
// --------------------------------------------------------------------------------------------------

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
