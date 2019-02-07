import React, { Component } from "react";

class Name extends Component {

    printName(name) {
        return `My name is ${name.firstName} ${name.lastName}.`
    }

    render() {
        var name = {
            firstName: "Ray",
            lastName: "Yang"
        };

        return (
            <div>
                {this.printName(name)}
            </div>
        )
    }
}

export default Name;