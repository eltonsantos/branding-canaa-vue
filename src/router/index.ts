import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Login from "../components/Login.vue"
import List from "../components/ListCompany.vue"
import Register from "../components/RegisterCompany.vue"
import Details from "../components/DetailsCompany.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Equipe",
    component: About
  },
  {
    path: "/companies",
    name: "Empresas",
    component: List
  },
  {
    path: "/register",
    name: "Registrar",
    component: Register
  },
  {
    path: "/company/:id",
    name: "Detalhes",
    component: Details
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;