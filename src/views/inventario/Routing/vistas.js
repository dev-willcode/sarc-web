import configuraciones from "@/views/shared/configuraciones";
export default [
  {
    path: "clientes",
    name: "clientes",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.cliente
    }
  },
  {
    path: "mecanicos",
    name: "mecanicos",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.mecanico
    }
  },
  {
    path: "vendedores",
    name: "vendedores",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.vendedor
    }
  },
  {
    path: "autos",
    name: "autos",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.auto
    }
  },
  {
    path: "servicio",
    name: "servicio",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.servicio
    }
  },
  {
    path: "marcas",
    name: "marcas",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.marca
    }
  },
  {
    path: "modeloauto",
    name: "modeloauto",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.modeloauto
    }
  },
  {
    path: "equipamientos",
    name: "equipamientos",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.equipamiento
    }
  },
  {
    path: "vehiculos",
    name: "vehiculos",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.vehiculo
    }
  },
  {
    path: "revisiontecnica",
    name: "revisiontecnica",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.revisiontecnica
    }
  },
  {
    path: "citas",
    name: "citas",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.citas
    }
  },
  {
    path: "facturaventa",
    name: "facturaventa",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.facturaventa
    }
  },
  {
    path: "facturaservicio",
    name: "facturaservicio",
    component: () => import("@/views/Vista"),
    props: {
      configuracion: configuraciones.facturaservicio
    }
  }
];
