/// <reference types="google.maps" />
/// <reference types="gtag.js" />

declare module "google.maps";
declare module "gtag.js";
// declare module "type-is";

interface Window {
  dataLayer?: object[];
}
