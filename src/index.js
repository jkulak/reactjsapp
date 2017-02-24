import React from 'react';
// import {render} from 'react-dom';

import {Provider} from 'react-redux';

import ReactDOM from 'react-dom';
import App from './App';
import store from './store';

ReactDOM.render(
// render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);
