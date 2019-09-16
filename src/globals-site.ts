import USERSCRIPT_CONFIG from "../config/userscript";

export const NAME: string = USERSCRIPT_CONFIG.sitename;
export const HOSTNAME: string = USERSCRIPT_CONFIG.hostname;

export const PATH = {
    entry: /^\/TW-Reg\//,
};

export const SELECTOR = {
    button_register: `[ng-if="vm.emailRegistrationPluginEnabled"] button`,
    checkbox_acceptTerms: `[ng-model="c.agreed"]`,
    button_acceptTerms: `button.terms-agree-button`,
    textfield_email: `input[type="email"]`,
    button_login: `[type="submit"]`,
};
