import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from '../store';
import { history2 } from '../helpers/navigationHelpers';
import TestGPS from './TestGPS';

function App() {
    return (
        <div className="PiDash">
            <TestGPS />
        </div>
    );
}

export default (
    <Provider store={store}>
        <Router history={history2}>
            <App />
        </Router>
    </Provider>
);
