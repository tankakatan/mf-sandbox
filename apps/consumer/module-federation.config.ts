import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3002/remoteEntry.js",
    remote_lib: "remote_lib@http://localhost:3003/remoteEntry.js",
  },
  shared: {
    "react": {
      singleton: true,
    },
    "react-dom": {
      singleton: true,
    },
  },
});
