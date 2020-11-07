export default {
  cliente: {
    titulo: "Clientes",
    formulario: "clientesformulario",
    urlListado: "cliente",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombre", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  mecanico: {
    titulo: "Mecanicos",
    formulario: "mecanicosformulario",
    urlListado: "mecanico",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    formulario: "vendedoresformulario",
    urlListado: "vendedor",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombre" },
      { label: "domicilio", field: "domicilio" }
    ]
  },
  auto: {
    titulo: "Autos",
    formulario: "autosformulario",
    urlListado: "auto",
    listado: [
      { label: "bastidor", field: "bastidor" },
      { label: "modelo", field: "modelo" },
      { label: "concesionario", field: "concesionario" }
    ]
  },
  servicio: {
    titulo: "Servicio",
    formulario: "servicioformulario",
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
    formulario: "marcasformulario",
    urlListado: "marca",
    listado: [{ label: "descripcion", field: "descripcion" }]
  },
  modeloauto: {
    titulo: "Modelo auto",
    formulario: "modeloautoformulario",
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
    formulario: "equipamientosformulario",
    urlListado: "equipamiento",
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" }
    ]
  },
  vehiculo: {
    titulo: "Vehiculos",
    formulario: "vehiculosformulario",
    urlListado: "vehiculo",
    listado: [
      { label: "chasis", field: "chasis" },
      { label: "matricula", field: "matricula" },
      { label: "cliente", field: "cliente" }
    ]
  },
  revisiontecnica: {
    titulo: "Revision Técnica",
    formulario: "revisiontecnicaformulario",
    urlListado: "revision_tecnica",
    listado: [
      { label: "vehiculo", field: "vehiculo" },
      { label: "fecha_revision", field: "fecha_revision" },
      { label: "fecha_proxima_revision", field: "fecha_proxima_revision" }
    ]
  },
  citas: {
    titulo: "Citas",
    formulario: "citasformulario",
    urlListado: "citas",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaventa: {
    titulo: "facturaventa",
    formulario: "facturaventaformulario",
    urlListado: "facturaventa",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaservicio: {
    titulo: "facturaservicio",
    formulario: "facturaservicioformulario",
    urlListado: "facturaservicio",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  }
};
