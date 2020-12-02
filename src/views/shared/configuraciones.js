export default {
  // modulo de inventario
  cliente: {
    titulo: "Clientes",
    formulario: "ClientesFormulario",
    urlListado: "cliente",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "dni", field: "dni", searchable: true },
      { label: "nombre", field: "nombre", searchable: true },
      { label: "domicilio", field: "domicilio", searchable: true },
      { label: "correo", field: "correo", searchable: true }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    formulario: "VendedoresFormulario",
    urlListado: "vendedor",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni", searchable: true },
      { label: "nombres", field: "nombre", searchable: true },
      { label: "domicilio", field: "domicilio", searchable: true },
      { label: "correo", field: "correo", searchable: true }
    ]
  },
  servicio: {
    titulo: "Servicio",
    formulario: "ServiciosFormulario",
    urlListado: "servicio",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni", searchable: true },
      { label: "nombres", field: "nombre", searchable: true },
      { label: "domicilio", field: "domicilio", searchable: true },
      { label: "tipo", field: "tipo", searchable: true }
    ]
  },
  marca: {
    titulo: "Marcas",
    formulario: "MarcasFormulario",
    urlListado: "marca",
    permisos: ["Admin", "Vendedor"],
    listado: [{ label: "descripcion", field: "descripcion", searchable: true }]
  },
  equipamiento: {
    titulo: "Equipamientos",
    formulario: "EquipamientosFormulario",
    urlListado: "equipamiento",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "nombre", field: "nombre", searchable: true },
      { label: "precio", field: "precio", searchable: true }
    ]
  },
  modeloauto: {
    titulo: "Modelo auto",
    formulario: "ModeloAutoFormulario",
    urlListado: "modelo_auto",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "modelo", field: "nombre_modelo", searchable: true },
      { label: "potencia", field: "potencia", searchable: true },
      { label: "cilindraje", field: "cilindraje", searchable: true },
      { label: "precio", field: "precio", searchable: true }
    ]
  },
  auto: {
    titulo: "Autos",
    formulario: "AutosFormulario",
    urlListado: "auto",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "bastidor", field: "bastidor", searchable: true },
      { label: "modelo", field: "nombre_modelo", searchable: true },
      { label: "concesionario", field: "servicio", searchable: true },
      {
        label: "disponible",
        field: "estado",
        searchable: true,
        type: "boolean"
      }
    ]
  },
  facturaventa: {
    titulo: "Facturas de venta",
    formulario: "VentasFacturaFormulario",
    urlListado: "factura_venta",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "cliente", field: "nombre_cliente", searchable: true },
      { label: "modelo", field: "nombre_modelo", searchable: true },
      { label: "fecha", field: "fecha_emision", searchable: true },
      { label: "precio", field: "precio", searchable: true }
    ]
  },
  // modulo de servicio
  mecanico: {
    titulo: "Mecanicos",
    formulario: "MecanicoFormulario",
    urlListado: "mecanico",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni", searchable: true },
      { label: "nombres", field: "nombre", searchable: true },
      { label: "domicilio", field: "domicilio", searchable: true },
      { label: "correo", field: "correo", searchable: true }
    ]
  },
  vehiculo: {
    titulo: "Vehiculos",
    formulario: "VehiculosFormulario",
    urlListado: "vehiculo",
    permisos: ["Admin", "Mecanico"],
    listado: [
      { label: "chasis", field: "chasis", searchable: true },
      { label: "matricula", field: "matricula", searchable: true },
      { label: "cliente", field: "nombre_cliente", searchable: true }
    ]
  },
  repuesto: {
    titulo: "Repuestos",
    formulario: "RepuestosFormulario",
    urlListado: "repuestos",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "nombre", field: "nombre", searchable: true },
      { label: "precio", field: "precio", searchable: true },
      { label: "cantidad", field: "cantidad", searchable: true }
    ]
  },
  revisiontecnica: {
    titulo: "Revision técnica",
    formulario: "RevisionTecnicaFormulario",
    urlListado: "revision_tecnica",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente", searchable: true },
      { label: "vehiculo", field: "matricula", searchable: true },
      { label: "fecha revision", field: "fecha_revision", searchable: true },
      {
        label: "fecha proxima revision",
        field: "fecha_proxima_revision",
        searchable: true
      },
      { label: "Costo", field: "costo_revision", searchable: true }
    ]
  },
  citas: {
    titulo: "Citas",
    formulario: "CitasFormulario",
    urlListado: "citas",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente", searchable: true },
      { label: "fecha", field: "fecha", searchable: true },
      { label: "hora", field: "hora", searchable: true },
      { label: "Taller", field: "nombre_taller", searchable: true },
      { label: "Dirección", field: "direccion_taller", searchable: true }
    ]
  },
  facturaservicio: {
    titulo: "Facturas de servicio",
    formulario: "ServiciosFacturaFormulario",
    urlListado: "factura_servicio",
    permisos: ["Admin", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente", searchable: true },
      { label: "fecha", field: "fecha_emision", searchable: true }
    ]
  }
};
