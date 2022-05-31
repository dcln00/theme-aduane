import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";
import Events from "../views/Events.vue";
import NotFound from '../views/404.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title:'Theme Aduane | Fine Dining Restaurant Theme',
        metaTags: [
          {
            name:'description',
            content:'Theme Aduane | Fine Dining Restaurant Theme'
          },
          //og
          {
            property:'og:description',
            content:'Theme Aduane | Fine Dining Restaurant Theme'
          }
        ]
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title:'About - Theme Aduane | Fine Dining Restaurant Theme',
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: {
        title:'Menu - Theme Aduane | Fine Dining Restaurant Theme',
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title:'Contact - Theme Aduane | Fine Dining Restaurant Theme',
      }
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        title:'Events - Theme Aduane | Fine Dining Restaurant Theme',
      }
    },
    { 
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
     return { top:0 }
  }
});

router.beforeEach((to, from, next) => {

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta) return next();


  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });


    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })

  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
