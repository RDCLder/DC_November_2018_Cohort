import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit() {
        e.preventDefault();
        alert()
    }

    render() {
        return (
            <div>
                {this.state.value}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Enter Some Text
                        <input type="text" onChange={} />
                    </label>
                    <input type="Submit" value="Submit" />
                </form>
            </div>
        );
    }
}


Form.propTypes = {

};

export default Form
