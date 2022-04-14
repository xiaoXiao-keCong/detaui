import { defineComponent } from 'vue'

import { RouterView } from 'vue-router'

const style = {
	display: 'flex',
	// margin: '50px',
	justifyContent: 'flex-start',
}
const sectionStyle = {
	display: 'flex',
}
export default defineComponent({
	setup() {
		return () => (
			<div style={style}>
				<RouterView></RouterView>
			</div>
		)
	},
})
