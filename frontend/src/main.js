import { createApp } from 'vue';
import App from './App.vue';

import router from "@/plugins/routers";
import Parse from 'parse';
import styles from './assets/styles/styles.css';
import { Ripple, Input, initTE } from "tw-elements";

const app = createApp(App)
app.use(router)

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'Ku7TrM9KSXib41V3rvRiDhB9MHNzCaaxULriWBgd', // This is your Application ID
    '1ZLScfJrHFwHahoXAf9YBad5LjaH2NeLDqFZh5Co' // This is your Javascript key
);

app.mount('#app')