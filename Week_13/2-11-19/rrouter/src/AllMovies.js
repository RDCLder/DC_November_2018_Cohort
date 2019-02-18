import React from 'react';
import PropTypes from 'prop-types';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);
        this.navHome = this.navHome.bind(this)
        this.history = props.history;
    }

    navHome() {
        this.history.push("/");
    }

    render() {
        return (
            <div>
                All Movies

                <button onCick={this.navHome()}>Home</button>
            </div>
        );
    }
}


AllMovies.propTypes = {

};

export default AllMovies
