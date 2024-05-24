import { fileURLToPath, URL } from 'url'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import { defineConfig, type BuildOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild from 'rollup-plugin-esbuild'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vitePluginVuedoc({}),
		vue({
			include: [...vueDocFiles],
		}),
		vueJsx({}),
		esbuild({
			target: 'esnext',
			exclude: ['/packages/libs/**/*.html'],

			// jsxFactory: "vueJsxCompat",
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@/': fileURLToPath(new URL('./src/', import.meta.url)),
			'@packages': fileURLToPath(new URL('./packages', import.meta.url)),
		},
	},

	css: {
		/* CSS 预处理器 */
		preprocessorOptions: {
			scss: {
				additionalData: "@import '@/assets/styles/global.scss';",
			},
		},
	},

	server: {
		host: '0.0.0.0',
		port: 3003,
	},
})
