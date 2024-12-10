import '../css/app.css';
import './bootstrap';

import '../assets/css/bootstrap.min.css'
import '../assets/css/maruf.css'
import '../assets/css/boxicons.min.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/styles.css'

import '../assets/login/css/style.css'

import "https://kit.fontawesome.com/c64519cdb1.js"

import "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"

// import '../assets/js/main.js'

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
