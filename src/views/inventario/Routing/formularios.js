import configuraciones from "@/views/shared/configuraciones";
export default [
  {
    path: "clientesformulario",
    name: "clientesformulario",
    component: () => import("@/views/inventario/ClientesFormulario"),
    configuracion: configuraciones.cliente
  },
  {
    path: "mecanicosformulario",
    name: "mecanicosformulario",
    component: () => import("@/views/inventario/MecanicoFormulario"),
    configuracion: configuraciones.mecanico
  },
  {
    path: "vendedoresformulario",
    name: "vendedoresformulario",
    component: () => import("@/views/inventario/VendedoresFormulario"),
    configuracion: configuraciones.vendedor
  },
  {
    path: "autosformulario",
    name: "autosformulario",
    component: () => import("@/views/inventario/AutosFormulario"),
    configuracion: configuraciones.auto
  },
  {
    path: "servicioformulario",
    name: "servicioformulario",
    component: () => import("@/views/inventario/ServiciosFormulario"),
    configuracion: configuraciones.servicio
  },
  {
    path: "marcasformulario",
    name: "marcasformulario",
    component: () => import("@/views/inventario/MarcasFormulario"),
    configuracion: configuraciones.marca
  },
  {
    path: "modeloautoformulario",
    name: "modeloautoformulario",
    component: () => import("@/views/inventario/ModeloAutoFormulario"),
    configuracion: configuraciones.modeloauto
  },
  {
    path: "equipamientosformulario",
    name: "equipamientosformulario",
    component: () => import("@/views/inventario/EquipamientosFormulario"),
    configuracion: configuraciones.equipamiento
  },
  {
    path: "vehiculosformulario",
    name: "vehiculosformulario",
    component: () => import("@/views/inventario/VehiculosFormulario"),
    configuracion: configuraciones.vehiculo
  },
  {
    path: "revisiontecnicaformulario",
    name: "revisiontecnicaformulario",
    component: () => import("@/views/inventario/RevisionTecnicaFormulario"),
    configuracion: configuraciones.revisiontecnica
  },
  {
    path: "citasformulario",
    name: "citasformulario",
    component: () => import("@/views/inventario/CitasFormulario"),
    configuracion: configuraciones.citas
  }
];
