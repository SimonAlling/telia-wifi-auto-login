import USERSCRIPT_CONFIG from "../config/userscript";

export const USERSCRIPT_ID: string = USERSCRIPT_CONFIG.id;
export const USERSCRIPT_NAME: string = USERSCRIPT_CONFIG.name;
export const USERSCRIPT_VERSION_STRING: string = USERSCRIPT_CONFIG.version;
export const USERSCRIPT_AUTHOR: string = USERSCRIPT_CONFIG.author;

export const ID_STYLE_ELEMENT = USERSCRIPT_CONFIG.id + "-main-style-element";

// How long to wait between performing operations (DOM manipulation etc) during page load:
export const INTERVAL_OPERATIONS: number = 200; // ms
// How long to wait after DOMContentLoaded before considering remaining operations failed:
export const TIMEOUT_OPERATIONS: number = 1000; // ms

export const DUMMY_EMAIL = "user@example.com";
