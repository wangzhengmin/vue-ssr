import Vue from "vue";
import Router from "vue-router";

import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import NewsDetail from "../views/NewsDetail.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/news",
        component: News,
      },
      {
        path: "/news/:id",
        component: NewsDetail,
      },
      {
        path: "*",
        component: NotFound,
      },
    ],
  });
}
