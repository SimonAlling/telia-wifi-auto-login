import { Operation, DependentOperation, IndependentOperation, SUCCESS, FAILURE } from "lib/operation-manager";
import * as SITE from "globals-site";
import * as CONFIG from "globals-config";
import { log, logError } from "userscripter/logging";
import * as Env from "./environment";
import { is } from "ts-type-guards";

function couldNotFind(elem: string): string {
    return `Could not find ${elem}.`;
}

function notFoundFailure(elem: string): boolean {
    logError(couldNotFind(elem)); return FAILURE;
}

const OPERATIONS: ReadonlyArray<Operation> = [
    new IndependentOperation({
        description: "inform the user that nothing will be done",
        condition: Env.isOnEntryPage === false,
        action: () => {
            log(`This doesn't look like the login page (because the current pathname, ${document.location.pathname}, is not matched by ${SITE.PATH.entry}). Doing nothing.`);
        },
    }),
    new DependentOperation({
        description: "login automatically",
        condition: Env.isOnEntryPage,
        selectors: { registerButton: SITE.SELECTOR.button_register },
        action: e => {
            // Initiate register procedure:
            log(`Looking for register button ...`);
            e.registerButton.click();

            // Accept terms and conditions:
            log(`Looking for terms checkbox ...`);
            const acceptCheckbox = document.querySelector(SITE.SELECTOR.checkbox_acceptTerms);
            if (!is(HTMLInputElement)(acceptCheckbox)) return notFoundFailure(`accept checkbox`);
            if (!acceptCheckbox.checked) acceptCheckbox.click();
            log(`Looking for terms button ...`);
            const acceptButton = document.querySelector(SITE.SELECTOR.button_acceptTerms);
            if (!is(HTMLButtonElement)(acceptButton)) return notFoundFailure(`accept button`);
            acceptButton.click();

            // Submit dummy email address:
            log(`Looking for email textfield ...`);
            const emailTextfield = document.querySelector(SITE.SELECTOR.textfield_email);
            if (!is(HTMLInputElement)(emailTextfield)) return notFoundFailure(`email textfield`);
            const email = CONFIG.DUMMY_EMAIL;
            log(`Entering ${email} as email address ...`);
            emailTextfield.value = email;
            emailTextfield.dispatchEvent(new Event("change"));
            log(`Looking for login button ...`);
            const emailForm = emailTextfield.form;
            if (!is(HTMLFormElement)(emailForm)) return notFoundFailure(`email form`);
            const loginButton = emailForm.querySelector(SITE.SELECTOR.button_login);
            if (!is(HTMLElement)(loginButton)) return notFoundFailure(`login button`);
            loginButton.click();
            log(`Clicked login button. You should hopefully be logged in now.`);
        },
    }),
];

export default OPERATIONS;
