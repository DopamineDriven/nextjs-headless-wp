import {
  NextApiRequest,
  NextApiResponse,
  GetServerSidePropsContext
} from "next";
import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";
import { DeepPartial } from "utility-types";
import { XOR } from "./helpers";
export type NonPagesResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

export type PagesResolverContext = {
  req?: NextApiRequest | GetServerSidePropsContext["req"];
  res?: NextApiResponse<any>;
};

export type ResolverContext = XOR<
  NonPagesResolverContext,
  PagesResolverContext
>;
