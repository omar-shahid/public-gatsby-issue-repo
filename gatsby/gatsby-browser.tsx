import { GatsbyBrowser } from "gatsby";
import "../src/styles/global.css";
import { WrapRootElement } from "../src/wrappers/wrapRootElement";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] =
  WrapRootElement;
