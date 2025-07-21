import mfConfig from './module-federation.config';

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3003
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation(mfConfig, {})
  ],
});
