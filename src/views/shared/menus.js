import configuraciones from "@/views/shared/configuraciones";
export default [
  {
    modulo: "General",
    vistas: [
      {
        to: "/apps/",
        label: "Inicio",
        icon: "home",
        permisos: ["Cliente", "Vendedor", "Mecanico"]
      },
      {
        to: "/apps/perfil",
        label: "Mi perifl",
        icon: "user-cog",
        permisos: ["Cliente", "Vendedor", "Mecanico"]
      }
    ]
  },
  {
    modulo: "Clientes",
    vistas: [
      {
        to: "/apps/cliente/vehiculos",
        label: "Mis vehiculos",
        icon: "car",
        permisos: ["Cliente"]
      },
      {
        to: "/apps/cliente/citas",
        label: "Mis citas",
        icon: "clock",
        permisos: ["Cliente"]
      }
    ]
  },
  {
    modulo: "Inventario",
    vistas: [
      {
        to: "/apps/clientes",
        label: "Clientes",
        icon: "users",
        permisos: configuraciones.cliente.permisos
      },
      {
        to: "/apps/vendedores",
        label: "Vendedores",
        icon: "user-tie",
        permisos: configuraciones.vendedor.permisos
      },
      {
        to: "/apps/servicio",
        label: "Servicios",
        icon: "location-arrow",
        permisos: configuraciones.servicio.permisos
      },
      {
        to: "/apps/marcas",
        label: "Marcas",
        icon: "shield-alt",
        permisos: configuraciones.marca.permisos
      },
      {
        to: "/apps/equipamientos",
        label: "Equipamientos",
        icon: "cube",
        permisos: configuraciones.equipamiento.permisos
      },
      {
        to: "/apps/modeloauto",
        label: "Modelo autos",
        icon: "truck-pickup",
        permisos: configuraciones.modeloauto.permisos
      },
      {
        to: "/apps/autos",
        label: "Autos",
        icon: "car",
        permisos: configuraciones.auto.permisos
      },
      {
        to: "/apps/facturaventa",
        label: "Factura de ventas",
        icon: "file-invoice-dollar",
        permisos: configuraciones.facturaventa.permisos
      }
    ]
  },
  {
    modulo: "Servicios",
    vistas: [
      {
        to: "/apps/mecanicos",
        label: "Mecanicos",
        icon: "toolbox",
        permisos: configuraciones.mecanico.permisos
      },
      {
        to: "/apps/vehiculos",
        label: "Vehiculos",
        icon: "car-side",
        permisos: configuraciones.vehiculo.permisos
      },
      {
        to: "/apps/repuestos",
        label: "Repuestos",
        icon: "tools",
        permisos: configuraciones.repuesto.permisos
      },
      {
        to: "/apps/revisiontecnica",
        label: "Revision tecnica",
        icon: "car-crash",
        permisos: configuraciones.revisiontecnica.permisos
      },
      {
        to: "/apps/citas",
        label: "Citas",
        icon: "clock",
        permisos: configuraciones.citas.permisos
      },
      {
        to: "/apps/facturaservicio",
        label: "Factura de servicio",
        icon: "file-invoice-dollar",
        permisos: configuraciones.facturaservicio.permisos
      }
    ]
  }
];
