import React from 'react';

class ProjectItem extends React.Component {
    deleteProject(id, e) {
        this.props.onDelete(id);
        e.preventDefault();
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>: {this.props.project.category} ({this.props.project.id}) <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    };
}

ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ProjectItem;
