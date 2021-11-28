import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

const shopifyConfig = {
  slocale: 'nl-nl',
  storeDomain: process.env.storefrontDomain, 
  storefrontToken: process.env.storefrontToken,
  graphqlApiVersion: 'unstable',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen(shopifyConfig)],
  optimizeDeps: {include: ['@headlessui/react']},
});
