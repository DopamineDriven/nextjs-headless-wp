import { fractionateCommaDelimitedData } from "./helpers";
import type { NextApiRequest, GetServerSidePropsContext } from "next";
import type { IncomingMessage } from "http";

export type GetIpProps = {
  req: NextApiRequest | GetServerSidePropsContext["req"] | IncomingMessage;
};

export function getIP({ req }: GetIpProps): { lastActiveIp: string } {
  const nonProxiedIp = req.headers["x-forwarded-for"] as string;
  const returnFirstRealIp = nonProxiedIp
    ? fractionateCommaDelimitedData(nonProxiedIp)[0]
    : req.socket.remoteAddress;
  return { lastActiveIp: returnFirstRealIp ?? "unknown" };
}
