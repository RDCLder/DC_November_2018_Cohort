import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-movie">Add Movie</Link></li>
                    <li><Link to="/all-movies">All Movies</Link></li>
                </ul>
            </div>
        );
    }
}


Header.propTypes = {
    
};

export default Header
