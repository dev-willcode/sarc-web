import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/landing/Home";
import Login from "@/views/landing/Login";
import Sesion from "@/views/landing/Sesion";
import Registro from "@/views/landing/Registro";
import Application from "@/views/Application";

// Routing
import inventario from "@/views/inventario/Routing/inventario";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    children: [
      {
        path: "sesion",
        name: "sesion",
        component: Sesion
      },
      {
        path: "register",
        name: "registro",
        component: Registro
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apps",
    name: "Apps",
    component: Application,
    children: [...inventario]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
