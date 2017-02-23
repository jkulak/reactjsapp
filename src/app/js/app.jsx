'use strict';

import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import DataElement from './components/DataElement.jsx';

render(
    <div>
        <Navbar />
        <h1>Welcome 😁</h1>
        <DataElement />
    </div>
    ,document.getElementById('app')
);
