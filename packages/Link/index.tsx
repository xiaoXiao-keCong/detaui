import type { App, Plugin } from 'vue';
import DetaLink from './src';

export const DetaLinkPlugin: Plugin = {
  install(app: App) {
    app.component('deta-link', DetaLink);
  },
};

export {
  DetaLink,
};