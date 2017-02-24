'use strict';

import React from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DataElement from './components/DataElement.jsx';

class App extends React.Component{
    render() {
        return (
            <div>
                <Navbar />
                <h1>Welcome 😁</h1>
                <DataElement />
                <Footer />
            </div>
        );
    }
}

export default App;
