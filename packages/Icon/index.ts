import type { App } from "vue";
import DetaIcon from "./src/index";
// export const COMP_NAME = 'Icon'
export const IconInstallPlugin = {
  install(app: App) {
    app.component(DetaIcon.name, DetaIcon);
  },
};

export { DetaIcon };
