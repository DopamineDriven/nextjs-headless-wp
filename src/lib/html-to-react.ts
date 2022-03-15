import parser, { DOMNode, HTMLReactParserOptions } from "html-react-parser";
import { Element, Node } from "domhandler/lib/node";

export const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode): DOMNode => {
    if (
      domNode instanceof Node && domNode.type
        ? domNode.type.replace("img", "Image")
        : domNode.type
    ) {
      return domNode;
    }
    return domNode.cloneNode<DOMNode>(true);
  }
};

export const htmlToReact = (x: string): string | JSX.Element | JSX.Element[] =>
  parser(x, {
    replace: (
      domNode: DOMNode
    ):
      | Node
      | (<T extends Node>(this: T, recursive?: boolean | undefined) => T) => {
      if (
        domNode instanceof Element && domNode.type.includes("img")
          ? domNode.type.replace("img", "Image")
          : domNode.type
      ) {
        return domNode.cloneNode<DOMNode>(true);
      } else {
        return domNode.cloneNode();
      }
    }
  });
