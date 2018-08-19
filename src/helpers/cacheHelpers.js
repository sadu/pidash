import { LOCALSTORAGE_KEY_PREFIX, LS_AUTHTOKEN_KEY } from '../constants/appConstants';
import { LocalStoragePolyfill } from './utils';

const localStorage = (window && window.localStorage) || LocalStoragePolyfill();

/**
 * Read wrapper for localstorage
 *
 * @param key
 * @returns {Storage}
 */
function read(key) {
    return localStorage && localStorage.getItem(LOCALSTORAGE_KEY_PREFIX + key);
}

/**
 * Write wrapper for localstorage
 *
 * @param key
 * @param value
 * @returns {Storage}
 */
function write(key, value) {
    return localStorage && localStorage.setItem(LOCALSTORAGE_KEY_PREFIX + key, value);
}

/**
 * Delete wrapper for localstorage
 *
 * @param key
 */
function deleteKey(key) {
    return localStorage && localStorage.removeItem(LOCALSTORAGE_KEY_PREFIX + key);
}

/**
 * Get cached auth token
 *
 * @returns {Storage}
 */
export function getAuthToken() {
    return read(LS_AUTHTOKEN_KEY);
}

/**
 * Store an auth token in cache
 *
 * @param token
 * @returns {Storage}
 */
export function setAuthToken(token) {
    return write(LS_AUTHTOKEN_KEY, token);
}

/**
 * Clear AuthToken
 *
 */
export function clearAuthToken() {
    deleteKey(LS_AUTHTOKEN_KEY);
    window.location.reload(true);
}
