import {
  createElement,
  useRef,
  useEffect,
  MutableRefObject,
  useCallback,
  ReactNode,
  ReactNodeArray
} from "react";
import { tabbable, FocusableElement } from "tabbable";

export type DocumentChildren<T extends keyof Document> = {
  [P in T]: Document[P];
};
export interface Props {
  children: ReactNode | ReactNodeArray;
  focusFirst?: boolean;
}

export default function FocusTrap({ children, focusFirst = false }: Props) {
  const root: MutableRefObject<FocusableElement | null | undefined> = useRef();
  const anchor: MutableRefObject<FocusableElement> = useRef<HTMLElement>(
    document.documentElement
  );

  const returnFocus = () => {
    // Returns focus to the last focused element prior to trap.
    if (anchor) {
      anchor.current.focus();
    }
  };

  const selectFirstFocusableEl = useCallback(() => {
    // Try to find focusable elements, if match then focus
    // Up to 6 seconds of load time threshold
    let match = false;
    const end = 60; // Try to find match at least n times
    let i = 0;
    const timer = setInterval(() => {
      if (!match !== i > end) {
        root && root.current ? (match = !!tabbable(root.current).length) : null;
        if (match) {
          // Attempt to focus the first el
          root && root.current ? tabbable(root.current)[0].focus() : null;
        }
        i = i + 1;
      } else {
        // Clear interval after n attempts
        clearInterval(timer);
      }
    }, 100);
  }, []);

  const trapFocus = useCallback(() => {
    // Focus the container element
    if (root.current) {
      root.current.focus();
      if (focusFirst) {
        selectFirstFocusableEl();
      }
    }
  }, [focusFirst, selectFirstFocusableEl]);

  useEffect(() => {
    setTimeout(trapFocus, 20);
    return () => {
      returnFocus();
    };
  }, [root, children, trapFocus]);

  return createElement("div", {
    ref: root,
    className: "outline-none focus-trap",
    tabIndex: -1
  }, { children });
}
