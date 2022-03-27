/// <reference types="google.maps" />
/// <reference types="grecaptcha" />
/// <reference types="gtag.js" />
/// <reference path="unwrap.d.ts" />

declare module "google.maps";
declare module "grecaptcha";
declare module "gtag.js";

// for google tag manager analytics compat
interface Window {
  dataLayer?: object[];
}
