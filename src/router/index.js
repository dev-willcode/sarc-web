import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// Routing
import vistas from "@/router/Routing/vistas";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/landing/Login"),
    children: [
      {
        path: "sesion",
        name: "sesion",
        component: () => import("@/views/landing/Sesion")
      },
      {
        path: "register",
        name: "registro",
        component: () => import("@/views/landing/Registro")
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/landing/Home")
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("@/views/Application"),
    children: [
      {
        path: "perfil",
        name: "perfil",
        component: () => import("@/views/Perfil/Perfil")
      },
      {
        path: "cliente_citas",
        name: "citasCliente",
        component: () => import("@/views/Perfil/Citas")
      },
      ...vistas
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.fullPath.includes("/apps/")) {
    if (store.state.usuario) next();
    else next({ name: "sesion" });
  } else next();
});

export default router;
