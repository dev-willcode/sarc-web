export default {
  cliente: {
    titulo: "Clientes",
    formulario: "ClientesFormulario",
    urlListado: "cliente",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombre", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  mecanico: {
    titulo: "Mecanicos",
    formulario: "MecanicoFormulario",
    urlListado: "mecanico",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    formulario: "VendedoresFormulario",
    urlListado: "vendedor",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" },
      { label: "correo", field: "correo" }
    ]
  },
  auto: {
    titulo: "Autos",
    formulario: "AutosFormulario",
    urlListado: "auto",
    listado: [
      { label: "bastidor", field: "bastidor" },
      { label: "modelo", field: "nombre_modelo" },
      { label: "concesionario", field: "servicio" },
      { label: "disponible", field: "estado", type: "boolean" }
    ]
  },
  servicio: {
    titulo: "Servicio",
    formulario: "ServiciosFormulario",
    urlListado: "servicio",
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
    listado: [{ label: "descripcion", field: "descripcion" }]
  },
  modeloauto: {
    titulo: "Modelo auto",
    formulario: "ModeloAutoFormulario",
    urlListado: "modelo_auto",
    listado: [
      { label: "modelo", field: "nombre_modelo" },
      { label: "potencia", field: "potencia" },
      { label: "cilindraje", field: "cilindraje" },
      { label: "precio", field: "precio" }
    ]
  },
  equipamiento: {
    titulo: "Equipamientos",
    formulario: "EquipamientosFormulario",
    urlListado: "equipamiento",
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" }
    ]
  },
  vehiculo: {
    titulo: "Vehiculos",
    formulario: "VehiculosFormulario",
    urlListado: "vehiculo",
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
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" }
    ]
  },
  revisiontecnica: {
    titulo: "Revision técnica",
    formulario: "RevisionTecnicaFormulario",
    urlListado: "revision_tecnica",
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
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaventa: {
    titulo: "Facturas de venta",
    formulario: "VentasFacturaFormulario",
    urlListado: "factura_venta",
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "modelo", field: "nombre_modelo" },
      { label: "fecha", field: "fecha_emision" },
      { label: "precio", field: "precio" }
    ]
  },
  facturaservicio: {
    titulo: "Facturas de servicio",
    formulario: "ServiciosFacturaFormulario",
    urlListado: "factura_servicio",
    listado: [
      { label: "cliente", field: "nombre_cliente" },
      { label: "modelo", field: "modelo" },
      { label: "fecha", field: "fecha_emision" },
      { label: "precio", field: "precio" }
    ]
  }
};
