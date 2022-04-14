import { createApp } from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/normalize.css'
import '@/assets/styles/base.css'
// import '@/assets/styles/global.scss'
import DetaUI from '@packages/index'
import 'vite-plugin-vuedoc/style.css'
const app = createApp(App)
app.use(DetaUI)
app.use(router)
app.mount('#app')
