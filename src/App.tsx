import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import CompList from '@/components/CompList'
import TopNav from './components/TopNav'
const style = {
	padding: '  10px',
}

export default defineComponent({
	setup() {
		return () => (
			<div style="height: 100%">
				<header>
					<TopNav></TopNav>
				</header>

				<main style="display: flex">
					<aside style="width: 300px">
						<CompList></CompList>
					</aside>
					<section style={style}>
						<RouterView></RouterView>
					</section>
				</main>
			</div>
		)
	},
})
