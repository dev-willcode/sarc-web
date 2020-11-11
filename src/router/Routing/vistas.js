import configuraciones from "@/views/shared/configuraciones";
import formularios from "@/router/Routing/formularios";

export default [
  {
    path: "clientes",
    name: "clientes",
    component: () => import("@/views/Vista"),
    children: [formularios.cliente],
    props: {
      configuracion: configuraciones.cliente
    }
  },
  {
    path: "mecanicos",
    name: "mecanicos",
    component: () => import("@/views/Vista"),
    children: [formularios.mecanico],
    props: {
      configuracion: configuraciones.mecanico
    }
  },
  {
    path: "vendedores",
    name: "vendedores",
    component: () => import("@/views/Vista"),
    children: [formularios.vendedor],
    props: {
      configuracion: configuraciones.vendedor
    }
  },
  {
    path: "autos",
    name: "autos",
    component: () => import("@/views/Vista"),
    children: [formularios.auto],
    props: {
      configuracion: configuraciones.auto
    }
  },
  {
    path: "servicio",
    name: "servicio",
    component: () => import("@/views/Vista"),
    children: [formularios.servicio],
    props: {
      configuracion: configuraciones.servicio
    }
  },
  {
    path: "marcas",
    name: "marcas",
    component: () => import("@/views/Vista"),
    children: [formularios.marca],
    props: {
      configuracion: configuraciones.marca
    }
  },
  {
    path: "modeloauto",
    name: "modeloauto",
    component: () => import("@/views/Vista"),
    children: [formularios.modeloauto],
    props: {
      configuracion: configuraciones.modeloauto
    }
  },
  {
    path: "equipamientos",
    name: "equipamientos",
    component: () => import("@/views/Vista"),
    children: [formularios.equipamiento],
    props: {
      configuracion: configuraciones.equipamiento
    }
  },
  {
    path: "vehiculos",
    name: "vehiculos",
    component: () => import("@/views/Vista"),
    children: [formularios.vehiculo],
    props: {
      configuracion: configuraciones.vehiculo
    }
  },
  {
    path: "revisiontecnica",
    name: "revisiontecnica",
    component: () => import("@/views/Vista"),
    children: [formularios.revisiontecnica],
    props: {
      configuracion: configuraciones.revisiontecnica
    }
  },
  {
    path: "citas",
    name: "citas",
    component: () => import("@/views/Vista"),
    children: [formularios.citas],
    props: {
      configuracion: configuraciones.citas
    }
  },
  {
    path: "facturaventa",
    name: "facturaventa",
    component: () => import("@/views/Vista"),
    children: [formularios.facturaventa],
    props: {
      configuracion: configuraciones.facturaventa
    }
  },
  {
    path: "facturaservicio",
    name: "facturaservicio",
    component: () => import("@/views/Vista"),
    children: [formularios.facturaservicio],
    props: {
      configuracion: configuraciones.facturaservicio
    }
  }
];
