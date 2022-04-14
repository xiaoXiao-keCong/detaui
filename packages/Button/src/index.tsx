import { defineComponent, renderSlot, defineEmits, withDefaults, defineProps, toRef } from 'vue'
import type { SetupContext, PropType } from 'vue'
import type { IDateButton } from './types/IButton'
import './button.css'

export default defineComponent<IDateButton>({
	name: 'deta-button',
	setup(props, { slots }: SetupContext) {
		return () => {
			return <button class={`detaui-button`}>{renderSlot(slots, 'default')}</button>
		}
	},
})
