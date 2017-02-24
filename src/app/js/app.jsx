'use strict';

import React from 'react';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import DataElement from './Components/DataElement.jsx';
import Projects from './Components/Projects.jsx';

class App extends React.Component{
    render() {
        return (
            <div>
                <Navbar />
                <h1>Welcome 😁! Better! Will that work???</h1>
                <Projects test="Hello World!"/>
                <DataElement />
                <Footer />
            </div>
        );
    }
}

export default App;
