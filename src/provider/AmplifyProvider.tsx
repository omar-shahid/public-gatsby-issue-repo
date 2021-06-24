import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
// @ts-ignore
import awsmobile from "./../aws-exports";

export const AmplifyProvider: React.FC = ({ children }) => {
  Amplify.configure({ ...awsmobile });
  return <>{children}</>;
};
