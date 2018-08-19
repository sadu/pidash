import {
    DATUM,
    DATUM_TYPE_GPS,
} from '../constants/appConstants';

const defaultState = {
    isLinkToPiActive: false,
    bufferConfig: {
        maxLength: 1000,
    },
    buffer: [],
};

export default function global(state = defaultState, caller = {}) {
    const { type: datumType, data } = caller;
    const { buffer, bufferConfig: { maxLength = 0 } } = state;

    switch (datumType) {
    case DATUM:
    case DATUM_TYPE_GPS:
        return {
            ...state,
            isLinkToPiActive: true,
            buffer: ([...buffer, data]).slice(-maxLength),
        };
    default:
        return state;
    }
}
