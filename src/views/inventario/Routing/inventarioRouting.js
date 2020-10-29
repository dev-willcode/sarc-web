export default [
  {
    path: "clientes",
    name: "clientes",
    component: () => import("@/views/inventario/ClientesFormulario")
  },
  {
    path: "mecanicos",
    name: "mecanicos",
    component: () => import("@/views/inventario/MecanicoFormulario")
  },
  {
    path: "vendedores",
    name: "vendedores",
    component: () => import("@/views/inventario/VendedoresFormulario")
  },
  {
    path: "autos",
    name: "autos",
    component: () => import("@/views/inventario/AutosFormulario")
  },    
  {
    path: "servicio",
    name: "servicio",
    component: () => import("@/views/inventario/ServiciosFormulario")
  },    
  {
    path: "marcas",
    name: "marcas",
    component: () => import("@/views/inventario/MarcasFormulario")
  }, 
  {
    path: "modeloauto",
    name: "modeloauto",
    component: () => import("@/views/inventario/ModeloAutoFormulario")
  },
  {
    path: "equipamientos",
    name: "equipamientos",
    component: () => import("@/views/inventario/EquipamientosFormulario")
  }, 
  {
    path: "vehiculos",
    name: "vehiculos",
    component: () => import("@/views/inventario/VehiculosFormulario")
  }, 
  {
    path: "revisiontecnica",
    name: "revisiontecnica",
    component: () => import("@/views/inventario/RevisionTecnicaFormulario")
  },
  {
    path: "citas",
    name: "citas",
    component: () => import("@/views/inventario/CitasFormulario")
  },

];
