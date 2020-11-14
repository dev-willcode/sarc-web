export default {
  cliente: {
    path: "formulario",
    name: "ClientesFormulario",
    props: true,
    component: () => import("@/views/inventario/ClientesFormulario")
  },
  mecanico: {
    path: "formulario",
    name: "MecanicoFormulario",
    props: true,
    component: () => import("@/views/servicio/MecanicoFormulario")
  },
  vendedor: {
    path: "formulario",
    name: "VendedoresFormulario",
    props: true,
    component: () => import("@/views/inventario/VendedoresFormulario")
  },
  auto: {
    path: "formulario",
    name: "AutosFormulario",
    props: true,
    component: () => import("@/views/inventario/AutosFormulario")
  },
  servicio: {
    path: "formulario",
    name: "ServiciosFormulario",
    props: true,
    component: () => import("@/views/inventario/ServiciosFormulario")
  },
  marca: {
    path: "formulario",
    name: "MarcasFormulario",
    props: true,
    component: () => import("@/views/inventario/MarcasFormulario")
  },
  modeloauto: {
    path: "formulario",
    name: "ModeloAutoFormulario",
    props: true,
    component: () => import("@/views/inventario/ModeloAutoFormulario")
  },
  equipamiento: {
    path: "formulario",
    name: "EquipamientosFormulario",
    props: true,
    component: () => import("@/views/inventario/EquipamientosFormulario")
  },
  vehiculo: {
    path: "formulario",
    name: "VehiculosFormulario",
    props: true,
    component: () => import("@/views/servicio/VehiculosFormulario")
  },
  repuesto: {
    path: "formulario",
    name: "RepuestosFormulario",
    props: true,
    component: () => import("@/views/servicio/RepuestosFormulario")
  },
  revisiontecnica: {
    path: "formulario",
    name: "RevisionTecnicaFormulario",
    props: true,
    component: () => import("@/views/servicio/RevisionTecnicaFormulario")
  },
  citas: {
    path: "formulario",
    name: "CitasFormulario",
    props: true,
    component: () => import("@/views/servicio/CitasFormulario")
  },
  facturaventa: {
    path: "formulario",
    name: "VentasFacturaFormulario",
    props: true,
    component: () => import("@/views/inventario/VentasFacturaFormulario")
  },
  facturaservicio: {
    path: "formulario",
    name: "ServiciosFacturaFormulario",
    props: true,
    component: () => import("@/views/servicio/ServiciosFacturaFormulario")
  }
};
