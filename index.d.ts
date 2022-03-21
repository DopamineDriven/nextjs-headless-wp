/// <reference types="google.maps" />
/// <reference types="grecaptcha" />
/// <reference types="gtag.js" />

declare module "google.maps";
declare module "grecaptcha";
declare module "gtag.js";

interface Window {
  dataLayer?: object[];
}
