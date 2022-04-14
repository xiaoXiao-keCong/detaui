import { defineComponent } from 'vue'
const style = {
	'display': 'flex',
	'border-bottom': 'solid 1px #e6e6e6',
}
const routerLinkStyle = {
	'padding': '10px ',
	'text-decoration': 'none',
}
export default defineComponent({
	setup() {
		return () => (
			<nav style={style}>
				<router-link style={routerLinkStyle} to="/home">
					首页
				</router-link>
				<router-link style={routerLinkStyle} to="/doc">
					文档
				</router-link>
			</nav>
		)
	},
})
