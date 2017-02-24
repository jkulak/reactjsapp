import React from 'react';
import ProjectItem from './ProjectItem';

class Projects extends React.Component{

    deleteProject(id) {
        this.props.onDelete(id);
    }

    render(){

        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
                )
            });
        }

        return (
            <div className="projects">
                {projectItems}
            </div>
        );
    }
}

Projects.propTypes = {
    projects: React.PropTypes.array,
    onDelete: React.PropTypes.func
}

export default Projects;
