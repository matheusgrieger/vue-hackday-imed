import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import About from '@/components/About'
import History from '@/components/History'
import Definition from '@/components/Definition'
import Sizes from '@/components/Sizes'
import Advantages from '@/components/Advantages'
import SampleApp from '@/components/SampleApp'
import SampleComponent from '@/components/SampleComponent'
import SampleVueComponent from '@/components/SampleVueComponent'

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
        nextSlide: 'Sizes',
        prevSlide: 'History'
      }
    },
    {
      path: '/sizes',
      name: 'Sizes',
      component: Sizes,
      meta: {
        nextSlide: 'Advantages',
        prevSlide: 'Definition'
      }
    },
    {
      path: '/advantages',
      name: 'Advantages',
      component: Advantages,
      meta: {
        nextSlide: 'SampleApp',
        prevSlide: 'Sizes'
      }
    },
    {
      path: '/sample-app',
      name: 'SampleApp',
      component: SampleApp,
      meta: {
        nextSlide: 'SampleComponent',
        prevSlide: 'Advantages'
      }
    },
    {
      path: '/sample-component',
      name: 'SampleComponent',
      component: SampleComponent,
      meta: {
        nextSlide: 'SampleVueComponent',
        prevSlide: 'SampleApp'
      }
    },
    {
      path: '/sample-vue-component',
      name: 'SampleVueComponent',
      component: SampleVueComponent,
      meta: {
        nextSlide: null,
        prevSlide: 'SampleComponent'
      }
    }
  ]
})
