import path from 'node:path';
import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const { publicVars } = loadEnv();

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  output: {
    assetPrefix: '/mf-provider-app/',
  },
  source: {
    define: publicVars,
    exclude: [
      path.resolve(__dirname, 'src/__tests__'),
      path.resolve(__dirname, 'src/__mocks__'),
    ],
  },
});
