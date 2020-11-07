import configuraciones from "@/views/shared/configuraciones";
export default {
  cliente: {
    path: "formulario",
    name: "ClientesFormulario",
    component: () => import("@/views/inventario/ClientesFormulario"),
    configuracion: configuraciones.cliente
  },
  mecanico: {
    path: "formulario",
    name: "MecanicoFormulario",
    component: () => import("@/views/inventario/MecanicoFormulario"),
    configuracion: configuraciones.mecanico
  },
  vendedor: {
    path: "formulario",
    name: "VendedoresFormulario",
    component: () => import("@/views/inventario/VendedoresFormulario"),
    configuracion: configuraciones.vendedor
  },
  auto: {
    path: "formulario",
    name: "AutosFormulario",
    component: () => import("@/views/inventario/AutosFormulario"),
    configuracion: configuraciones.auto
  },
  servicio: {
    path: "formulario",
    name: "ServiciosFormulario",
    component: () => import("@/views/inventario/ServiciosFormulario"),
    configuracion: configuraciones.servicio
  },
  marca: {
    path: "formulario",
    name: "MarcasFormulario",
    component: () => import("@/views/inventario/MarcasFormulario"),
    configuracion: configuraciones.marca
  },
  modeloauto: {
    path: "formulario",
    name: "ModeloAutoFormulario",
    component: () => import("@/views/inventario/ModeloAutoFormulario"),
    configuracion: configuraciones.modeloauto
  },
  equipamiento: {
    path: "formulario",
    name: "EquipamientosFormulario",
    component: () => import("@/views/inventario/EquipamientosFormulario"),
    configuracion: configuraciones.equipamiento
  },
  vehiculo: {
    path: "formulario",
    name: "VehiculosFormulario",
    component: () => import("@/views/inventario/VehiculosFormulario"),
    configuracion: configuraciones.vehiculo
  },
  revisiontecnica: {
    path: "formulario",
    name: "RevisionTecnicaFormulario",
    component: () => import("@/views/inventario/RevisionTecnicaFormulario"),
    configuracion: configuraciones.revisiontecnica
  },
  citas: {
    path: "formulario",
    name: "CitasFormulario",
    component: () => import("@/views/inventario/CitasFormulario"),
    configuracion: configuraciones.citas
  }
};
