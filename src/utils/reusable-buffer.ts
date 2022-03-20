export enum BufferEncodingOptions {
  ascii = "ascii",
  utf8 = "utf8",
  "utf-8" = "utf-8",
  utf16le = "utf16le",
  ucs2 = "ucs2",
  "ucs-2" = "ucs-2",
  base64 = "base64",
  base64url = "base64url",
  latin1 = "latin1",
  binary = "binary",
  hex = "hex"
}

export default function buf<
  TData extends WithImplicitCoercion<string | Uint8Array | readonly number[]>,
  From extends keyof typeof BufferEncodingOptions,
  To extends keyof typeof BufferEncodingOptions,
  StartNum extends number | undefined,
  StopNum extends number | undefined
>(
  data: TData,
  encodingFrom: From,
  encodingTo: To,
  start?: StartNum,
  end?: StopNum
): string {
  return Buffer.from(data as string, encodingFrom).toString(
    encodingTo,
    start,
    end
  );
}
/**
 * "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex"
 */
