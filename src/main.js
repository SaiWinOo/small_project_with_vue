import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import ErrorDialog from "./components/UI/ErrorDialog.vue";
createApp(App)
    .component('error-dialog',ErrorDialog)
    .component('base-button',BaseButton)
    .component('base-card',BaseCard)
    .mount('#app')
