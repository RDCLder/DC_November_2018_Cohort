import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
    
        let friendList = this.props.friend.map((friend) => {
            return 
        })
    
        return (
            <div>
                Hello {this.propTypes.name}!
            </div>
        );
    }
}


Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default Hello;