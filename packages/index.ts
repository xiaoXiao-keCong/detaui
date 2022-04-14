import type { App, Plugin } from 'vue'
import '@packages/libs/icomoon/style.css'

const MODULES = import.meta.globEager('../packages/**/index.ts')

const COMPS = Object.keys(MODULES).filter((path) => {
	return path !== '../packages/index.ts'
})
// console.log(COMPS)

const DetaUIPlugin: Plugin = {
	install(app: App) {
		COMPS.forEach((path) => {
			const COMP_NAME = path.replace(/(..\/packages\/)(.*)(\/index.ts)/, '$2')
			const COMP = MODULES[path]
			const PREFIX = COMP_NAME.toUpperCase().substring(0, 1) + COMP_NAME.substring(1)
			COMP[`${PREFIX}InstallPlugin`].install(app)
		})
	},
}

export default DetaUIPlugin

// -- APPEND HERE --
export * from './Link'


export * from './Button'
export * from './Icon'




