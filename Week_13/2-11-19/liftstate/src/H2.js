import React from 'react';
import PropTypes from 'prop-types';

class H2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <center>
                    <h2>
                        (Sibling) Click Counter: {this.props.clickCount}
                        <button onClick={() => { this.props.onReset() }}>Reset</button>
                    </h2>
                </center>
            </div>
        );
    }
}


H2.propTypes = {

};

export default H2
