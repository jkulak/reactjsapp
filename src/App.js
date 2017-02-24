import React from 'react';

import uuid from 'uuid';
import axios from 'axios';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DataElement from './Components/DataElement';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';


class App extends React.Component{

    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getTodos() {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                this.setState({
                    todos: response.data
                }, () => {
                    console.log(this.state);
                })
            }.bind(this))
            .catch(function (err) {
                console.log(err);
            });
    }

    getProjects() {
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

    componentWillMount() {

        // this.getTodos();
        // this.getProjects();
    }

    componentDidMount() {
        this.getTodos();
        this.getProjects();
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
