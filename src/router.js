import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Contact from './views/Contact';
import Quiz from './views/Quiz';
import Login from './views/Login';
import Register from './views/Register';
import Dogs from './views/Dogs';
import Cats from './views/Cats';
import Pets from './views/Pets';
import Adopt from './views/Adopt';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: About },
        { path: '/services', name: 'services', component: Services },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/quiz', name: 'quiz', component: Quiz },
        { path: '/login', name: 'login', component: Login },
        { path: '/register', name: 'register', component: Register },
        { path: '/dogs', name: 'dogs', component: Dogs },
        { path: '/cats', name: 'cats', component: Cats },
        { path: '/pets/:species/:id', name: 'pets', component: Pets },
        { path: '/adopt', name: 'adopt', component: Adopt }
    ]
});