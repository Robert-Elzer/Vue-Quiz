import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/quiz', component: () => import('../views/QuizView.vue') },
        { path: '/results', component: () => import('../views/ResultsView.vue')}
    ]
})

export default router