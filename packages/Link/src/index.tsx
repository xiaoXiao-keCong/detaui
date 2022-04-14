import { defineComponent, } from 'vue'
import type { SetupContext, PropType } from 'vue'
import type { IDetaLink } from './types/IDetaLink.d'


export default defineComponent< IDetaLink >({
	name: 'deta-link',
	setup(props, { slots }: SetupContext) {
		return () => <div>这是一个新链接</div>
	},
})
