import { render } from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import websocket from './websocket';

import './stylesheets/index.css';
import { DATUM_TYPE_GPS, DATUM } from './constants/appConstants';

render(App, document.getElementById('root'));
registerServiceWorker();

const enabledDataChannels = [DATUM, DATUM_TYPE_GPS];

enabledDataChannels.forEach(channelName =>
    websocket.on(channelName, data => store.dispatch({ type: channelName, data })),
);
