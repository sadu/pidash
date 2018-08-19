import io from 'socket.io-client';

import { APP_WEBSOCKET } from './constants/appConstants';

export default io(APP_WEBSOCKET);
