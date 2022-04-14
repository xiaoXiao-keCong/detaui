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

	build: {
		external: ['vue'],
		lib: {
			name: 'deta-ui',
			entry: './packages',
			fileName: (format) => `deta-ui.${format}.js`,
		},

		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],

			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				// formats: 'iife',
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
			},
		},
	} as BuildOptions,
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
