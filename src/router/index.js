import Vue from "vue";
import Router from "vue-router";
import index from "@/views/index.vue";
import login from "@/views/base/login.vue";
import { demoRouter } from "./demoRouter";
Vue.use(Router);

export const allRouters = [demoRouter];
const baseRoutes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/home",
    component: index,
    name: "home"
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  demoRouter
];

export default new Router({
  routes: baseRoutes
});
