import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// -------------------------------------------------------------------------------------------
// COMPONENT: COUNTER
// -------------------------------------------------------------------------------------------

class Counter extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <div>
                <span>{this.props.storeCount}</span>
                <button onClick={this.props.onIncreaseClick}>Increase</button>
            </div>
        );
    }
}


// -------------------------------------------------------------------------------------------
// ACTIONS
// -------------------------------------------------------------------------------------------

const increaseAction = {
    type: "INCREASE"
}

// -------------------------------------------------------------------------------------------
// REDUCER
// -------------------------------------------------------------------------------------------

function counter(state = {count: 0}, action) {

    // const count = state.count;

    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}

// -------------------------------------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------------------------------------

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction) // Requires key-value pair
    }
}

function mapStateToProps(state) {
    return {
        storeCount: state.count
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

const store = createStore(counter);

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>, 
    
    document.getElementById('root'));
