import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
/* eslint-disable */

export default new Router({
    routes: [{
        path: '/',
        name: 'landing-page',
        redirect: '/table',
        component: require('@/components/LandingPage').default,
        children: [{
            path: '/table',
            name: 'table',
            component: require('@/components/v-bigIconList/v-bigIconList').default
        },
        {
            path: '/bar',
            name: 'bar',
            component: require('@/basic/v-table/v-table').default
        }
        ]
    },
    {
        path: '/floating/window',
        name: 'floating-window',
        component: require('@/components/floatingWindow/floatingWindow').default
    },
    {
        path: '*',
        redirect: '/'
    }
    ]
});
