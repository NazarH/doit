import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/play',
    name: 'Play',
    component: () => import('../views/Play.vue')
  },

  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },

  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue')
  },

  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },

  {
    path: '/sponsorship',
    name: 'Sponsorship',
    component: () => import('../views/Sponsorship.vue')
  },

  {
    path: '/terms-of-servise',
    name: 'TermsOfServise',
    component: () => import('../views/TermsOfServise.vue')
  },

  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/top',
    name: 'Top',
    component: () => import('../views/Top.vue')
  },

  {
    path: '/tournaments',
    name: 'Tournaments',
    component: () => import('../views/Tournaments.vue')
  },

  {
    path: '/tournament-register',
    name: 'Tournament-register',
    component: () => import('../views/RegisterTourn.vue')
  },

  {
    path: '/admin-pannel',
    name: 'Admin-pannel',
    component: () => import('../views/AdminPannel.vue')
  },

  {
    path: '/create-team',
    name: 'Create-team',
    component: () => import('../views/CreateTeam.vue')
  },

  {
    path: '/create-game',
    name: 'Create-game',
    component: () => import('../views/CreateGame.vue')
  },

  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },

  {
    path: '/edit-team/:url',
    name: 'Edit-team',
    component: () => import('../views/EditTeam.vue'),
    props: true
  },

  {
    path: '/edit-user/:userId',
    name: 'Edit-user',
    component: () => import('../views/EditUser.vue'),
    props: true
  },

  {
    path: '/profile/:userNickn',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    props: true
  },

  {
    path: '/tournament/:tournURL',
    name: 'Tournament',
    component: () => import('../views/Tournament.vue'),
    props: true
  },

  {
    path: '/tournament-edit/:tournURL',
    name: 'Tournament-edit',
    component: () => import('../views/Tournament-edit.vue'),
    props: true
  },

  {
    path: '/game-edit/:gameURL',
    name: 'Game-edit',
    component: () => import('../views/Game-edit.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
