'use strict';

import React from 'react';

class Projects extends React.Component{
    render(){
        return (
            <div className="projects">
                List of my projects
                {this.props.test}
            </div>
        );
    }
}

export default Projects;
