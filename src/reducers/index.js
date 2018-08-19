import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import global from './global';
import gps from './gps';

export default combineReducers({
    global,
    gps,
    form: formReducer,
});
