import React from 'react';

export const RAF = (global.requestAnimationFrame = window.requestAnimationFrame = cb => {
    setTimeout(cb, 0);
});

export const fetch = (global.fetch = window.fetch = argument => {
    console.log('HIT AJAX', argument);
    return new Promise(resolve => resolve({ json: () => [] }));
});
