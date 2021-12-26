import Vue from "vue";
import VueRouter from "vue-router";
import confirm from "../views/confirm.vue";
import detail from "../views/detail.vue";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  },
  {
    path: "/confirm",
    name: "confirm",
    component: confirm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
