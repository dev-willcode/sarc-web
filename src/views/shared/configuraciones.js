export default {
  cliente: {
    titulo: "Clientes",
    formulario: "ClientesFormulario",
    urlListado: "cliente",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombre", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  mecanico: {
    titulo: "Mecanicos",
    formulario: "MecanicoFormulario",
    urlListado: "mecanico",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    formulario: "VendedoresFormulario",
    urlListado: "vendedor",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  auto: {
    titulo: "Autos",
    formulario: "AutosFormulario",
    urlListado: "auto",
    listado: [
      { label: "bastidor", field: "bastidor" },
      { label: "modelo", field: "modelo" },
      { label: "concesionario", field: "concesionario" }
    ]
  },
  servicio: {
    titulo: "Servicio",
    formulario: "ServiciosFormulario",
    urlListado: "servicio",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombres" },
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
      { label: "cliente", field: "cliente" }
    ]
  },
  revisiontecnica: {
    titulo: "Revision Técnica",
    formulario: "RevisionTecnicaFormulario",
    urlListado: "revision_tecnica",
    listado: [
      { label: "vehiculo", field: "vehiculo" },
      { label: "fecha_revision", field: "fecha_revision" },
      { label: "fecha_proxima_revision", field: "fecha_proxima_revision" }
    ]
  },
  citas: {
    titulo: "Citas",
    formulario: "CitasFormulario",
    urlListado: "citas",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaventa: {
    titulo: "facturaventa",
    formulario: "VentasFacturaFormulario",
    urlListado: "factura_venta",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaservicio: {
    titulo: "facturaservicio",
    formulario: "ServiciosFacturaFormulario",
    urlListado: "factura_servicio",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  }
};
