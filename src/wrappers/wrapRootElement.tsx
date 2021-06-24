import React, { useEffect, useState } from "react";
import { AmplifyProvider } from "../provider/AmplifyProvider";
import { GatsbyBrowser, WrapRootElementBrowserArgs } from "gatsby";

export const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <AmplifyProvider>{element}</AmplifyProvider>;
};
