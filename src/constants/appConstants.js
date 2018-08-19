export const APP_PI_IP = process.env.APP_PI_IP || '192.168.0.75';
export const APP_PI_PORT = process.env.APP_PI_PORT || 9000;
export const APP_WEBSOCKET = `http://${APP_PI_IP}:${APP_PI_PORT}`;

export const DATUM = 'pi/message';
export const DATUM_TYPE_GPS = 'pi/message/gps';

export const VALUE_TYPE_KNOTS = 'knots';
export const VALUE_TYPE_RMC = 'RMC';
