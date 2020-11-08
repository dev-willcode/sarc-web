<template>
  <div
    id="entry"
    class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
  >
    <div id="body">
      <nav-bar />
      <aside-menu :menu="menu" />
      <router-view :key="$route.path" />
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
            to: "/apps/",
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
            to: "/apps/vendedores",
            label: "Vendedores",
            icon: "user-tie"
          },
          {
            to: "/apps/servicio",
            label: "Servicios",
            icon: "location-arrow"
          },
          {
            to: "/apps/autos",
            label: "Autos",
            icon: "car"
          },
          {
            to: "/apps/modeloauto",
            label: "Modelo autos",
            icon: "truck-pickup"
          },
          {
            to: "/apps/equipamientos",
            label: "Equipamientos",
            icon: "cube"
          },
          {
            to: "/apps/marcas",
            label: "Marcas",
            icon: "shield-alt"
          },
          {
            to: "/apps/facturaventa",
            label: "Factura de ventas",
            icon: "file-invoice-dollar"
          }
        ],
        "Servicios",
        [
          {
            to: "/apps/mecanicos",
            label: "Mecanicos",
            icon: "user-cog"
          },
          {
            to: "/apps/vehiculos",
            label: "Vehiculos",
            icon: "car-side"
          },
          {
            to: "/apps/citas",
            label: "Citas",
            icon: "clock"
          },
          {
            to: "/apps/revisiontecnica",
            label: "Revision tecnica",
            icon: "car-crash"
          },
          {
            to: "/apps/facturaservicio",
            label: "Factura de servicio",
            icon: "file-invoice-dollar"
          }
        ]
      ];
    }
  }
};
</script>
