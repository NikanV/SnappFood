import { createApp } from 'vue'
import App from './App.vue'
import router from "@/plugins/routers";
import styles from './assets/styles/styles.css'

createApp(App).use(router, styles).mount('#app')