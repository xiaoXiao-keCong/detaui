import type { App } from 'vue'
import DetaButton from './src/index'
export const ButtonInstallPlugin = {
	install(app: App) {
		app.component(DetaButton.name, DetaButton)
	},
}

export { DetaButton }
