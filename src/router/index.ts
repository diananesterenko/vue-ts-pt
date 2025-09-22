import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { useAuthStore } from '@/store/ modules/auth.module';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      layout:"main",
      auth : true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta:{
      layout:"main",
      auth : true
    }
  },
  {
    path: '/application/:id',
    name: 'Application',
    component: () => import('../views/Application.vue'),
    meta:{
      layout:"main",
      auth : true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta:{
      layout:"auth"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth;
  if(requiredAuth && useAuthStore().isAuthenticated) {
    next();
  } else if(requiredAuth && !useAuthStore().isAuthenticated){
    next('/auth?message=auth');
  }
  else {
    next();
  }
})

export default router