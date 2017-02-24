import React from 'react';

import uuid from 'uuid';
import axios from 'axios';

import {connect} from 'react-redux';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import DataElement from './Components/DataElement';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import UserList from './Components/UserList';

import {fetchUsers} from './Actions/UserActions';

class App extends React.Component{

    // @connect(store => {
    App = connect(
        store => {
            return {
                users: store.users.users
            }
        }
    )(App);

    constructor() {
        super();
        this.state = {
            projects: [],
            todos: [],
            users: []
        }
    }

    getUsers() {
        this.setState({
            users: [
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

        this.props.dispatch(fetchUsers());

        // this.getTodos();
        // this.getProjects();
    }

    componentDidMount() {
        this.getTodos();
        this.getProjects();
        this.getUsers();
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
        // this.props.users;
        return (
            <div>
                <Navbar />
                <h1>Welcome 😁</h1>
                <UserList users={this.props.users} />
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
                <DataElement />
                <Footer />
            </div>
        );
    }
}

export default App;
