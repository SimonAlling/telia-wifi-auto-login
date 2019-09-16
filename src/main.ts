import * as SITE from "globals-site";
import * as CONFIG from "globals-config";
import { log } from "userscripter/logging";
import { startOperations, stopOperations } from "userscripter/operation-handling";

// Actions that can and should be performed before the DOM is loaded, such as inserting CSS:
function beforeLoad(): void {
    log(`Userscript created by ${CONFIG.USERSCRIPT_AUTHOR}.`);
    log("Performing pre-load actions ...");
    document.addEventListener("DOMContentLoaded", afterLoad);
    startOperations();
    log("Operations (DOM manipulation etc) started.");
}

// Actions that require that the entire DOM be accessible:
function afterLoad(): void {
    log("DOMContentLoaded! Performing post-load actions ...");
    stopOperations(CONFIG.TIMEOUT_OPERATIONS);
}

beforeLoad();
