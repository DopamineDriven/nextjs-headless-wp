import type { NextApiRequest, GetServerSidePropsContext } from "next";
import type { HarvestNetworkDataProps } from "@/types/network";
import type { UnwrapPromise } from "@/types/mapped";

export const HarvestNetworkInfo = async (
  req: GetServerSidePropsContext["req"] | NextApiRequest
): Promise<HarvestNetworkDataProps> => {
  const nonProxiedIp = req.headers["x-forwarded-for"] as string;
  const returnFirstRealIp = nonProxiedIp
    ? nonProxiedIp.split(/([,])/)[0]
    : req.socket.remoteAddress;
  const addressInfo = req.socket.address();

  const RawHeaders = req.headers;
  const Cookies = req.cookies;
  const lookup = req.socket.emit("drain");
  console.log(lookup);

  return {
    ClientIp: `${returnFirstRealIp}`,
    BoundAFP: addressInfo,
    Headers: RawHeaders,
    Cookies
  };
};

export type HarvestNetworkInfoReturnType = UnwrapPromise<
  ReturnType<typeof HarvestNetworkInfo>
>;
