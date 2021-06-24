import { GatsbySSR } from "gatsby";
import "../src/styles/global.css";
import { WrapRootElement } from "../src/wrappers/wrapRootElement";

export const wrapRootElement: GatsbySSR["wrapRootElement"] =
  WrapRootElement as any;
