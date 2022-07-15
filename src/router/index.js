import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/MenuView.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/menu/:id",
    name: "SingleCardView",
    component: () => import("../views/SingleCardView.vue"),
    props: true,
  },
  {
    path: "/checkout",
    name: "checkoutview",
    component: () => import("../views/CheckOutView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
