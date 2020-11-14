export default [
  {
    modulo: "General",
    vistas: [
      {
        to: "/apps/",
        label: "Inicio",
        icon: "home"
      },
      {
        to: "/apps/perfil",
        label: "Mi perifl",
        icon: "user-cog"
      }
    ]
  },
  {
    modulo: "Clientes",
    vistas: [
      {
        to: "/apps/cliente/vehiculos",
        label: "Mis vehiculos",
        icon: "car"
      },
      {
        to: "/apps/cliente/citas",
        label: "Mis citas",
        icon: "clock"
      }
    ]
  },
  {
    modulo: "Inventario",
    vistas: [
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
    ]
  },
  {
    modulo: "Servicios",
    vistas: [
      {
        to: "/apps/mecanicos",
        label: "Mecanicos",
        icon: "toolbox"
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
        to: "/apps/repuestos",
        label: "Repuestos",
        icon: "tools"
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
  }
];
