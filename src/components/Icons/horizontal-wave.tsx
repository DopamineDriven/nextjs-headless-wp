import cn from "classnames";
import Image from "next/image";
import { VFC, FC, useState, useEffect, createElement } from "react";
import { blurDataURLShimmer, ShimmerProps } from "@/lib/shimmer";
import dogeTroubleshoot from "public/doge-troubleshoot.jpg";
import { Code } from "../UI";
import { useRouter } from "next/router";
import { Page } from "@/components/Page/index";
import Unwrap from "unwrap-react";

export const HorizontalWave: FC<
  Unwrap.ReactUnwrapped<"svg" | "path" | "foreignObject">
> = ({ children, foreignObject, path, svg }) => (
  <svg
    {...svg}
    height={svg?.height ?? "80px"}
    viewBox='0 0 1440 181'
    preserveAspectRatio={svg?.preserveAspectRatio ?? "none"}
    className={cn("c-PJLV c-PJLV-ifGHEql-css", svg?.className ?? "")}>
    <path
      {...path}
      d='M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z'
      fill={path?.fill ?? "#FFF"}
      fillRule={path?.fillRule ?? "nonzero"}
      stroke={path?.stroke ?? "none"}
      strokeWidth={path?.strokeWidth ?? 1}
    />
    <foreignObject {...foreignObject}>{children ?? <></>}</foreignObject>
  </svg>
);

// add state, fetching, lifecycle events, routing, etc etc here like in any other
const OOIntrinsicElements: VFC<
  Unwrap.ReactUnwrapped<
    "div" | "video" | "svg" | "section" | "main" | "h2" | "code"
  >
> = ({ div, video, svg, section, main, h2, code }) => {
  const router = useRouter();
  const [home, setHome] = useState(true);
  useEffect(() => {
    (async function RouteIIFE() {
      router.route === "/" ? setHome(true) : setHome(false);
    })();
  }, [router]);
  const blurDataValues = {
    h: dogeTroubleshoot.height,
    w: dogeTroubleshoot.width
  } as ShimmerProps;
  return (
    <Page main={{ ...main }}>
      <div className='' {...div}>
        {createElement("div", {
          h2: <h2 {...h2} />, // return IntrinsicElement Values directly OR...
          section:
            router.route === "/" // conditionally render elements however you want
              ? {
                  children: () => {
                    <HorizontalWave
                      svg={{
                        className:
                          "motion-safe:animate-pulse duration-300 ease-in-out transform-gpu bg-blend-luminosity min-w-full transition-transform"
                      }}>
                      <Code
                        code={{
                          lang: "typescript",
                          dangerouslySetInnerHTML: {
                            __html: `<HorizontalWave
                          svg={{ ...svg }}
                          foreignObject={{ renderingIntent: "video" }}
                          path={{
                            "aria-activedescendant": "",
                            onChange: e => {
                              e.preventDefault();
                            }
                          }}>
                          {/** Access Deeply nested props, eg: <OOIntrinsicElements video={{src: "your-video-source"}} /> */}
                          <video {...video} />
                        </HorizontalWave>`
                          },
                          ...code
                        }}
                      />
                    </HorizontalWave>;
                  }
                }
              : {
                  // if certain props are unused OOP to access props, then return the unused remainder as props
                  title: "👀",
                  children: () =>
                    // conditionally render in nested props, too, using OOP
                    home === true ? (
                      <>
                        <HorizontalWave
                          svg={{ ...svg }}
                          foreignObject={{ renderingIntent: "video" }}
                          path={{
                            "aria-activedescendant": "",
                            onChange: e => {
                              e.preventDefault();
                            }
                          }}>
                          {/** Access Deeply nested props, eg: <OOIntrinsicElements video={{src: "your-video-source"}} /> */}
                          <video {...video} />
                        </HorizontalWave>
                      </>
                    ) : (
                      (() => {
                        <>
                          <Image
                            src={dogeTroubleshoot.src}
                            width={dogeTroubleshoot.width}
                            height={dogeTroubleshoot.height}
                            blurDataURL={dogeTroubleshoot.blurDataURL}
                            alt={blurDataURLShimmer(blurDataValues)}
                            onBlur={e => blurDataURLShimmer(blurDataValues)}
                          />
                        </>;
                      }) ?? { ...section }
                    ),
                  "aria-label": new Date(Date.now())
                    .toUTCString()
                    .split(/([T])/)[0]
                }
        })}
      </div>
    </Page>
  );
};
export default OOIntrinsicElements;
