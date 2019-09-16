import * as SITE from "./globals-site";

export const isOnEntryPage: boolean = SITE.PATH.entry.test(document.location.pathname);
