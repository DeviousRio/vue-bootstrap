import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/services', name: 'services', component: Services },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/login', name: 'login', component: Login }
    ]
});