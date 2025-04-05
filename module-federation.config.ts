import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_provider_app',
  exposes: {
    '.': './src/App.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    tailwindcss: { singleton: true },
    '@tailwindcss/postcss': { singleton: true },
    '@fontsource/roboto': { singleton: true },
    '@fontsource/poppins': { singleton: true },
  },
});
