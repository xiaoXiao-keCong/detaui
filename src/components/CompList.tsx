import { defineComponent } from 'vue'
import list from '@packages/list.json'
export default defineComponent({
	setup(props, ctx) {
		return () => (
			<ul>
				{list.map((item) => (
					<li>
						<router-link class="nav-item" to={`${item.compName.toLowerCase()}`}>
							{item.compName}
						</router-link>
					</li>
				))}
			</ul>
		)
	},
})
