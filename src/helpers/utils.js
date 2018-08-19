export function LocalStoragePolyfill() {
    const fakeLS = {
        getItem: key => fakeLS[key],
        setItem: (key, value) => {
            fakeLS[key] = typeof value === 'object' ? JSON.stringify(value) : value;
        },
    };

    return fakeLS;
}

export function knotsToKmph(speedInKnots) {
    const knotInKmph = 1.852;
    return Math.round(speedInKnots * knotInKmph);
}
