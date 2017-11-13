import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import About from '@/components/About'
import History from '@/components/History'
import Definition from '@/components/Definition'
import Advantages from '@/components/Advantages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
      meta: {
        nextSlide: 'About',
        prevSlide: null
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        nextSlide: 'History',
        prevSlide: 'Intro'
      }
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta: {
        nextSlide: 'Definition',
        prevSlide: 'About'
      }
    },
    {
      path: '/definition',
      name: 'Definition',
      component: Definition,
      meta: {
        nextSlide: 'Advantages',
        prevSlide: 'History'
      }
    },
    {
      path: '/advantages',
      name: 'Advantages',
      component: Advantages,
      meta: {
        nextSlide: null,
        prevSlide: 'Definition'
      }
    }
  ]
})
