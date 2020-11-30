export default {
  // modulo de inventario
  cliente: {
    titulo: "Clientes",
    formulario: "ClientesFormulario",
    urlListado: "cliente",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombre", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    formulario: "VendedoresFormulario",
    urlListado: "vendedor",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  servicio: {
    titulo: "Servicio",
    formulario: "ServiciosFormulario",
    urlListado: "servicio",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "tipo", field: "tipo" }
    ]
  },
  marca: {
    titulo: "Marcas",
    formulario: "MarcasFormulario",
    urlListado: "marca",
    permisos: ["Admin", "Vendedor"],
    listado: [{ label: "descripcion", field: "descripcion" }]
  },
  equipamiento: {
    titulo: "Equipamientos",
    formulario: "EquipamientosFormulario",
    urlListado: "equipamiento",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" }
    ]
  },
  modeloauto: {
    titulo: "Modelo auto",
    formulario: "ModeloAutoFormulario",
    urlListado: "modelo_auto",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "modelo", field: "nombre_modelo" },
      { label: "potencia", field: "potencia" },
      { label: "cilindraje", field: "cilindraje" },
      { label: "precio", field: "precio" }
    ]
  },
  auto: {
    titulo: "Autos",
    formulario: "AutosFormulario",
    urlListado: "auto",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "bastidor", field: "bastidor" },
      { label: "modelo", field: "nombre_modelo" },
      { label: "concesionario", field: "servicio" },
      { label: "disponible", field: "estado", type: "boolean" }
    ]
  },
  facturaventa: {
    titulo: "Facturas de venta",
    formulario: "VentasFacturaFormulario",
    urlListado: "factura_venta",
    permisos: ["Admin", "Vendedor"],
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "modelo", field: "nombre_modelo" },
      { label: "fecha", field: "fecha_emision" },
      { label: "precio", field: "precio" }
    ]
  },
  // modulo de servicio
  mecanico: {
    titulo: "Mecanicos",
    formulario: "MecanicoFormulario",
    urlListado: "mecanico",
    permisos: ["Admin"],
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  vehiculo: {
    titulo: "Vehiculos",
    formulario: "VehiculosFormulario",
    urlListado: "vehiculo",
    permisos: ["Admin", "Mecanico"],
    listado: [
      { label: "chasis", field: "chasis" },
      { label: "matricula", field: "matricula" },
      { label: "cliente", field: "nombre_cliente" }
    ]
  },
  repuesto: {
    titulo: "Repuestos",
    formulario: "RepuestosFormulario",
    urlListado: "repuestos",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" },
      { label: "cantidad", field: "cantidad" }
    ]
  },
  revisiontecnica: {
    titulo: "Revision técnica",
    formulario: "RevisionTecnicaFormulario",
    urlListado: "revision_tecnica",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "vehiculo", field: "matricula" },
      { label: "fecha revision", field: "fecha_revision" },
      { label: "fecha proxima revision", field: "fecha_proxima_revision" },
      { label: "Costo", field: "costo_revision" }
    ]
  },
  citas: {
    titulo: "Citas",
    formulario: "CitasFormulario",
    urlListado: "citas",
    permisos: ["Admin", "Vendedor", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "fecha", field: "fecha" },
      { label: "hora", field: "hora" },
      { label: "Taller", field: "nombre_taller" },
      { label: "Dirección", field: "direccion_taller" }
    ]
  },
  facturaservicio: {
    titulo: "Facturas de servicio",
    formulario: "ServiciosFacturaFormulario",
    urlListado: "factura_servicio",
    permisos: ["Admin", "Mecanico"],
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "fecha", field: "fecha_emision" }
    ]
  }
};
