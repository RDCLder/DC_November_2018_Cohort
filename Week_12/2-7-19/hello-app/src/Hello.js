import React from 'react';

class Hello extends React.Component {

    party() {
        if (this.props.age >= 21) {
            return "can party at Moon Tower";
        }
        return "are too young to party at Moon Tower";
    }

    render() {

        return (
            <div>
                Hello {this.props.name}, you're {this.props.age} and {this.party()}.
            </div>
        );
    }
}

export default Hello;