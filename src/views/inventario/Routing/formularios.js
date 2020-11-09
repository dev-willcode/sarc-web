import configuraciones from "@/views/shared/configuraciones";
export default {
  cliente: {
    path: "formulario",
    name: "ClientesFormulario",
    props: true,
    component: () => import("@/views/inventario/ClientesFormulario"),
    configuracion: configuraciones.cliente
  },
  mecanico: {
    path: "formulario",
    name: "MecanicoFormulario",
    props: true,
    component: () => import("@/views/inventario/MecanicoFormulario"),
    configuracion: configuraciones.mecanico
  },
  vendedor: {
    path: "formulario",
    name: "VendedoresFormulario",
    props: true,
    component: () => import("@/views/inventario/VendedoresFormulario"),
    configuracion: configuraciones.vendedor
  },
  auto: {
    path: "formulario",
    name: "AutosFormulario",
    props: true,
    component: () => import("@/views/inventario/AutosFormulario"),
    configuracion: configuraciones.auto
  },
  servicio: {
    path: "formulario",
    name: "ServiciosFormulario",
    props: true,
    component: () => import("@/views/inventario/ServiciosFormulario"),
    configuracion: configuraciones.servicio
  },
  marca: {
    path: "formulario",
    name: "MarcasFormulario",
    props: true,
    component: () => import("@/views/inventario/MarcasFormulario"),
    configuracion: configuraciones.marca
  },
  modeloauto: {
    path: "formulario",
    name: "ModeloAutoFormulario",
    props: true,
    component: () => import("@/views/inventario/ModeloAutoFormulario"),
    configuracion: configuraciones.modeloauto
  },
  equipamiento: {
    path: "formulario",
    name: "EquipamientosFormulario",
    props: true,
    component: () => import("@/views/inventario/EquipamientosFormulario"),
    configuracion: configuraciones.equipamiento
  },
  vehiculo: {
    path: "formulario",
    name: "VehiculosFormulario",
    props: true,
    component: () => import("@/views/inventario/VehiculosFormulario"),
    configuracion: configuraciones.vehiculo
  },
  revisiontecnica: {
    path: "formulario",
    name: "RevisionTecnicaFormulario",
    props: true,
    component: () => import("@/views/inventario/RevisionTecnicaFormulario"),
    configuracion: configuraciones.revisiontecnica
  },
  citas: {
    path: "formulario",
    name: "CitasFormulario",
    props: true,
    component: () => import("@/views/inventario/CitasFormulario"),
    configuracion: configuraciones.citas
  },
  facturaventa: {
    path: "formulario",
    name: "VentasFacturaFormulario",
    props: true,
    component: () => import("@/views/inventario/VentasFacturaFormulario"),
    configuracion: configuraciones.ventafactura
  },
  facturaservicio: {
    path: "formulario",
    name: "ServiciosFacturaFormulario",
    props: true,
    component: () => import("@/views/inventario/ServiciosFacturaFormulario"),
    configuracion: configuraciones.facturaservicio
  }
};
