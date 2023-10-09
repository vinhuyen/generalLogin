import {createRouter, createWebHistory} from "vue-router";
import {isEmpty} from 'lodash';
import Login from "../views/login/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";
import {AuthUtils} from "@/utils/localStorageUtils";
import store from "@/stores";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {left: 0, top: 0};
  },
});

router.beforeEach(async (to, from, next) => {
  let token =  AuthUtils.getTokenFromCookies()
  let user = store.state.auth.user

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (token) {
    await store.dispatch('auth/getAuthInfo', token)
    user = store.state.auth.user
  }

  if (!isEmpty(user)) {

    const hasAllPermissions = true

    if (!hasAllPermissions && to.path.startsWith('/admin')) {
      next({
        path: '/permission-page'
      });
      return;
    }
  }


  let checkMenu = true

  if (token && (to.path === '/login' || to.path === '/') && !isEmpty(user) && checkMenu) {
    next()
  } else if (!token && requiresAuth) {
    next({
      path: '/login'
    })
  } else if (token && requiresAuth && !checkMenu) {
    next({
      path: '/permission-page'
    })
  } else {
    next()
  }
})

export default router;
