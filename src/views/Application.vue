<template>
  <div
    id="entry"
    class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
  >
    <div id="body">
      <nav-bar />
      <aside-menu :menu="menu" />
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/application/NavBar";
import AsideMenu from "@/components/application/AsideMenu";

export default {
  name: "Application",
  components: {
    AsideMenu,
    NavBar
  },
  computed: {
    menu() {
      return [
        "General",
        [
          {
            to: "/apps",
            label: "Inicio",
            icon: "home"
          }
        ],
        "Inventario",
        [
          {
            to: "/apps/clientes",
            label: "Clientes",
            icon: "users"
          },
          {
            to: "vendedores",
            label: "Vendedores",
            icon: "user-tie"
          },
          {
            to: "servicio",
            label: "Servicios",
            icon: "location-arrow"
          },
          {
            to: "autos",
            label: "Autos",
            icon: "car"
          },
          {
            to: "modeloauto",
            label: "Modelo autos",
            icon: "truck-pickup"
          },
          {
            to: "equipamientos",
            label: "Equipamientos",
            icon: "cube"
          },
          {
            to: "marcas",
            label: "Marcas",
            icon: "shield-alt"
          },
          {
            to: "facturaventa",
            label: "Factura de ventas",
            icon: "file-invoice-dollar"
          }
        ],
        "Servicios",
        [
          {
            to: "mecanicos",
            label: "Mecanicos",
            icon: "user-cog"
          },
          {
            to: "vehiculos",
            label: "Vehiculos",
            icon: "car-side"
          },
          {
            to: "citas",
            label: "Citas",
            icon: "clock"
          },
          {
            to: "revisiontecnica",
            label: "Revision tecnica",
            icon: "car-crash"
          },
          {
            to: "facturaservicio",
            label: "Factura de servicio",
            icon: "file-invoice-dollar"
          }
        ]
      ];
    }
  }
};
</script>
