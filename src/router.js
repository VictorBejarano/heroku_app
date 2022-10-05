import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Product from "./components/Product.vue";
import Clients from "./components/Clients.vue";
import Home from "./components/Home.vue";
import Service from "./components/Service.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: App,
  },
  {
    path: "/client",
    name: "client",
    component: Clients,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
