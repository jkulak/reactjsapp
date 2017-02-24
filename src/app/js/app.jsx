'use strict';

import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import DataElement from './Components/DataElement.jsx';
import Projects from './Components/Projects.jsx';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    title: "First title",
                    category: "Funny"
                },
                {
                    title: "All about them",
                    category: "Sad"
                },
                {
                    title: "There was a bridge",
                    category: "Architecture"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Welcome 😁! Better!</h1>
                <Projects test="Hello World!"/>
                <DataElement />
                <Footer />
            </div>
        );
    }
}

export default App;
