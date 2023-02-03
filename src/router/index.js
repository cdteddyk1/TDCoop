import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/seConnecter',
      name: 'seConnecter',
      component: () => import('../views/seConnecterView.vue')
    }
    ,
    {
      path: '/creeCompte',
      name: 'creeCompte',
      component: () => import('../views/creeCompteView.vue')
    }
    ,
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/logoutView.vue')
    }
    ,
    {
      path: '/CreerConversation',
      name: 'CreerConversation',
      component: () => import('../views/CreerConversationView.vue')
    }
    ,
    {
      path: `/Conversation/:id`,
      name: 'Conversation',
      component: () => import('../views/ConversationView.vue')
    },
    {
      path: `/Membres`,
      name: 'Membres',
      component: () => import('../views/MembresView.vue')
    }
  ]
})

export default router
