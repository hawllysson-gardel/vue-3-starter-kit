import { createWebHistory, createRouter } from 'vue-router';

export const history = createWebHistory();

export const routes = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/pages/home/Home.vue'),
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('~/pages/counter/Counter.vue'),
    },
    {
      path: '/form-validation',
      name: 'formValidation',
      component: () => import('~/pages/form-validation/FormValidation.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('~/pages/not-found/NotFound.vue'),
    },
  ],
});
