import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects/',
            name: 'projects',
            component: Projects
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router };