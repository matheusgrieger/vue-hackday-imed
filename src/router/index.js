import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/components/Intro'
import About from '@/components/About'
import History from '@/components/History'
import Definition from '@/components/Definition'
import Stats from '@/components/Stats'
import Advantages from '@/components/Advantages'
import Sizes from '@/components/Sizes'
import SampleApp from '@/components/SampleApp'
import SampleComponent from '@/components/SampleComponent'
import SampleVueComponent from '@/components/SampleVueComponent'
import ExtraFeatures from '@/components/ExtraFeatures'
import OfficialResources from '@/components/OfficialResources'
import End from '@/components/End'

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
        nextSlide: 'Stats',
        prevSlide: 'About'
      }
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats,
      meta: {
        nextSlide: 'Definition',
        prevSlide: 'History'
      }
    },
    {
      path: '/definition',
      name: 'Definition',
      component: Definition,
      meta: {
        nextSlide: 'Advantages',
        prevSlide: 'Stats'
      }
    },
    {
      path: '/advantages',
      name: 'Advantages',
      component: Advantages,
      meta: {
        nextSlide: 'Sizes',
        prevSlide: 'Definition'
      }
    },
    {
      path: '/sizes',
      name: 'Sizes',
      component: Sizes,
      meta: {
        nextSlide: 'SampleApp',
        prevSlide: 'Advantages'
      }
    },
    {
      path: '/sample-app',
      name: 'SampleApp',
      component: SampleApp,
      meta: {
        nextSlide: 'SampleComponent',
        prevSlide: 'Sizes'
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
        nextSlide: 'ExtraFeatures',
        prevSlide: 'SampleComponent'
      }
    },
    {
      path: '/extra-features',
      name: 'ExtraFeatures',
      component: ExtraFeatures,
      meta: {
        nextSlide: 'OfficialResources',
        prevSlide: 'SampleVueComponent'
      }
    },
    {
      path: '/official-resources',
      name: 'OfficialResources',
      component: OfficialResources,
      meta: {
        nextSlide: 'End',
        prevSlide: 'ExtraFeatures'
      }
    },
    {
      path: '/end',
      name: 'End',
      component: End,
      meta: {
        nextSlide: null,
        prevSlide: 'OfficialResources'
      }
    }
  ]
})
