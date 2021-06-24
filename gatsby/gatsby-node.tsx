import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import path from "path";
import { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()],
  });
};
