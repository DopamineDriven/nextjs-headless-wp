import { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function Middleware(req: NextRequest) {
  const userAgent = req.ua;
  const { ua, geo, ip, headers } = req;
  const nonProxiedIp = headers.get("x-forwarded-for") as string;
  const returnFirstRealIp = nonProxiedIp
    ? nonProxiedIp.split(/([,])/)[0]
    : ip ?? "no ip";
  const userData = {
    city: geo?.city ?? "no ciudad",
    lat: geo?.latitude ?? "no lat",
    lng: geo?.longitude ?? "no lng",
    country: geo?.country ?? "no pais",
    region: geo?.region ?? "no region",
    userAgent: JSON.stringify(ua ?? "no ua", null, 2),
    ipAddress: returnFirstRealIp
  };
  console.log(userAgent ?? "no userAgent");
  const response = NextResponse.next();

  response.headers.set("Referrer-Policy", "Strict-Origin-When-Cross-Origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://www.andrewross.tech; https://www.andrewross.engineer; https://vitals.vercel-insights.com;  https://www.googletagmanager.com/; https://connect.facebook.net; https://studio.apollographql.com; https://serve.onegraph.com;"
  );
  response.headers.set(
    "Cache-Control",
    "public, stale-while-revalidate=600, s-maxage=1200"
  );
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "On");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Connection, Cookie, Host, User-Agent, Accept-Encoding, Accept-Language, apollo-federation-include-trace, Authorization, Cache-Control"
  );

  return { response: response, userData: userData ?? "no userData here folks" };
}