import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import list from '@packages/list.json'

const _import = (path = 'views/DocView', ext = 'tsx') => import(`../${path}.${ext}`)

const routes = [
	{
		path: '/home',
		name: 'home',
		component: HomeView,
	},
	...list.map((item) => {
		return {
			path: `/${item.compName}`,
			name: `${item.compZhName}`,

			component: _import(`docs/${item.compName.toLowerCase()}`, 'md'),
		}
	}),
	{
		path: '/doc',
		name: 'doc',
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => _import(),
	},
	{
		path: '/',
		// name: 'home',
		redirect: '/home',
		component: HomeView,
	},
]
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes as any,
})
console.log(routes)
export default router
