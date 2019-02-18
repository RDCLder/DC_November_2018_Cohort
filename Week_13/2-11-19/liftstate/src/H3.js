import React from 'react';
import PropTypes from 'prop-types';

class H3 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <center>
                    <button onClick={() => {this.props.onClickProp()}}>Submit</button>
                </center>
            </div>
        );
    }
}


H3.propTypes = {
    
};

export default H3
