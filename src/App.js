import React from 'react';

import uuid from 'uuid';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DataElement from './Components/DataElement';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: "First title",
                    category: "Funny"
                },
                {
                    id: uuid.v4(),
                    title: "All about them",
                    category: "Sad"
                },
                {
                    id: uuid.v4(),
                    title: "There was a bridge",
                    category: "Architecture"
                }
            ]
        });
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects});
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects});
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Welcome 😁</h1>
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
                <DataElement />
                <Footer />
            </div>
        );
    }
}

export default App;
