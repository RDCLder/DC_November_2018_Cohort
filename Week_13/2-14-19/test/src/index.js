import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

class Counter extends React.Component {

    render() {
        return (
            <div>
                <span>{this.props.storeCount}</span>
                <button onClick={this.props.incrementClick}>INCREMENT</button>
                <button onClick={this.props.decrementClick}>DECREMENT</button>
                <button onClick={this.props.resetClick}>RESET</button>
            </div>
        );
    }
}

// ----------------------------------------------------------------------------------------------------------------
// ACTIONS
// ----------------------------------------------------------------------------------------------------------------

const incrementAction = {
    type: "INCREMENT"
};

const decrementAction = {
    type: "DECREMENT"
};

const resetAction = {
    type: "RESET"
}

// ----------------------------------------------------------------------------------------------------------------
// REDUCER
// ----------------------------------------------------------------------------------------------------------------

function counterReducer(state = { count: 0 }, action) {
    const count = state.count;
    switch (action.type) {
        case "INCREMENT":
            return {count: count + 1};
        case "DECREMENT":
            return {count: count - 1};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

// ----------------------------------------------------------------------------------------------------------------
// MAPPING
// ----------------------------------------------------------------------------------------------------------------

// Maps all dispatch-based props
function mapDispatchToProps(dispatch) {
    return {
        incrementClick: () => dispatch(incrementAction),
        decrementClick: () => dispatch(decrementAction),
        resetClick: () => dispatch(resetAction)
    };
}

// Maps all state-based props
function mapStateToProps(state) {
    return {
        storeCount: state.count
    };
}

// Connects App component to Counter component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// ----------------------------------------------------------------------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------------------------------------------------------------------

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
