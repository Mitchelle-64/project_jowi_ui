import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwind.css';
import tailwindTheme from '../tailwind.config'; // Import your custom theme configuration

import ShipperNavDrawer from './components/ShipperNavDrawer.vue'

import SvgIcon from '@jamescoyle/vue-icon';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import {fa } from 'vuetify/iconsets/fa';

import store from './store'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi', 
      aliases, 
      sets: {
        mdi,
        fa,
      }
    }
})



const app = createApp(App).use(store);

// Create and use Vuetify instance
app.use(router);
app.use(vuetify, {
    theme: {
      // Pass your custom theme colors to the Vuetify theme
      extend: {
        colors: tailwindTheme.theme.extend.colors,
      },
    },
});
app.use(store);

//register components in your application here
app.component('NavDrawer', ShipperNavDrawer);

app.component('svg-icon', SvgIcon);

app.mount('#app');