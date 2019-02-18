import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from "./Project.js";

class Project extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let projectItems;

        if (this.props.project.length > 0) {
            projectItems = this.props.project.map((item) => {
                return <ProjectItem project={item}/>
            })
        }

        return (
            <div>
                {projectItems}
            </div>
        );
    }
}


Project.propTypes = {

};

export default Project
