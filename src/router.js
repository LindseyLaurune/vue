import Vue from 'vue'
import Router from 'vue-router'
import Lander from './components/lander'
import Home from './components/home'
import Books from './components/books'
import Portfolio from './components/portfolio'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'lander',
      component: Lander
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})