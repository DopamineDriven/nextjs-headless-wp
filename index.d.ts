/// <reference types="google.maps" />
/// <reference types="gtag.js" />

declare module "google.maps";
declare module "gtag.js";

interface Window {
  dataLayer?: object[];
}
