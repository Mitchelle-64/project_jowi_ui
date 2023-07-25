import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './assets/tailwind.css';
import tailwindTheme from '../tailwind.config'; // Import your custom theme configuration


// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

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

app.mount('#app');