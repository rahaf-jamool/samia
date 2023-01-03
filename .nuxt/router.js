import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58c0ac8a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6cd8fb4e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4bdbc49f = () => interopDefault(import('../pages/ourprofile.vue' /* webpackChunkName: "pages/ourprofile" */))
const _2c990706 = () => interopDefault(import('../pages/practice.vue' /* webpackChunkName: "pages/practice" */))
const _2bd92618 = () => interopDefault(import('../pages/media/gallery/index.vue' /* webpackChunkName: "pages/media/gallery/index" */))
const _a492b03a = () => interopDefault(import('../pages/media/news/index.vue' /* webpackChunkName: "pages/media/news/index" */))
const _2768dce8 = () => interopDefault(import('../pages/media/videos/index.vue' /* webpackChunkName: "pages/media/videos/index" */))
const _1950f700 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _58c0ac8a,
    name: "about"
  }, {
    path: "/contact",
    component: _6cd8fb4e,
    name: "contact"
  }, {
    path: "/ourprofile",
    component: _4bdbc49f,
    name: "ourprofile"
  }, {
    path: "/practice",
    component: _2c990706,
    name: "practice"
  }, {
    path: "/media/gallery",
    component: _2bd92618,
    name: "media-gallery"
  }, {
    path: "/media/news",
    component: _a492b03a,
    name: "media-news"
  }, {
    path: "/media/videos",
    component: _2768dce8,
    name: "media-videos"
  }, {
    path: "/",
    component: _1950f700,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
