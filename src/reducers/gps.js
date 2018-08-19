import { DATUM_TYPE_GPS, VALUE_TYPE_KNOTS, VALUE_TYPE_RMC } from '../constants/appConstants';
import { knotsToKmph } from '../helpers/utils';

const defaultState = {
    location: {
        lat: '0',
        lon: '0',
    },
    speed: 0,
    speedFormat: VALUE_TYPE_KNOTS,
    bufferConfig: {
        maxLength: 1000,
    },
    buffer: [],
    navBuffer: [],
};

export default function gps(state = defaultState, caller = {}) {
    const { type: datumType, data = {} } = caller;
    const {
        buffer,
        bufferConfig: { maxLength },
        navBuffer,
    } = state;
    const { sentence: valueType, lat, lon, speedKnots } = data;
    const newState = Object.assign({}, state, {
        buffer: [...buffer, data].slice(-maxLength),
    });

    switch (datumType) {
    case DATUM_TYPE_GPS:
        switch (valueType) {
        case VALUE_TYPE_RMC:
            newState.location = { lat, lon };
            newState.speed = knotsToKmph(speedKnots);
            newState.navBuffer = [...navBuffer, data].slice(-maxLength);
            break;
        default:
            break;
        }
        return newState;
    default:
        return state;
    }
}
