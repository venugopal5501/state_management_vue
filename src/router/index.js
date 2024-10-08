import { createRouter, createWebHistory } from 'vue-router';
import VuexCounterPage from '../components/VuexCounterPage.vue'
import VuexEmployeePage from '../components/VuexEmployeePage.vue'
import VuexUserList from '../components/VuexUserList.vue';
import HomeView from '../components/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'home',
        component: VuexCounterPage
    },
    {
        path: '/employee',
        name: 'Employee',
        component: VuexEmployeePage
    },
    {
        path: '/users',
        name: 'VuexUserList',
        component: VuexUserList
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;