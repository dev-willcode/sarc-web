export default {
  cliente: {
    titulo: "Clientes",
    nuevaVista: "clientesformulario",
    urlListado: "cliente",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombres" },
      { label: "direccion", field: "direccion" },
      { label: "telefono", field: "telefono" }
    ]
  },
  mecanico: {
    titulo: "Mecanicos",
    nuevaVista: "mecanicosformulario",
    urlListado: "mecanico",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombres" },
      { label: "direccion", field: "direccion" },
      { label: "telefono", field: "telefono" }
    ]
  },
  vendedor: {
    titulo: "Vendedores",
    nuevaVista: "vendedoresformulario",
    urlListado: "vendedor",
    listado: [
      { label: "dni", field: "dni" },
      { label: "nombres", field: "nombres" },
      { label: "direccion", field: "direccion" },
      { label: "telefono", field: "telefono" }
    ]
  },
  auto: {
    titulo: "Autos",
    nuevaVista: "autosformulario",
    urlListado: "auto",
    listado: [
      { label: "bastidor", field: "bastidor" },
      { label: "modelo", field: "modelo" },
      { label: "concesionario", field: "concesionario" }
    ]
  },
  servicio: {
    titulo: "Servicio",
    nuevaVista: "servicioformulario",
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
    nuevaVista: "marcasformulario",
    urlListado: "marca",
    listado: [{ label: "descripcion", field: "descripcion" }]
  },
  modeloauto: {
    titulo: "Modelo auto",
    nuevaVista: "modeloautoformulario",
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
    nuevaVista: "equipamientosformulario",
    urlListado: "equipamiento",
    listado: [
      { label: "nombre", field: "nombre" },
      { label: "precio", field: "precio" }
    ]
  },
  vehiculo: {
    titulo: "Vehiculos",
    nuevaVista: "vehiculosformulario",
    urlListado: "vehiculo",
    listado: [
      { label: "chasis", field: "chasis" },
      { label: "matricula", field: "matricula" },
      { label: "cliente", field: "cliente" }
    ]
  },
  revisiontecnica: {
    titulo: "Revision Técnica",
    nuevaVista: "revisiontecnicaformulario",
    urlListado: "revision_tecnica",
    listado: [
      { label: "vehiculo", field: "vehiculo" },
      { label: "fecha_revision", field: "fecha_revision" },
      { label: "fecha_proxima_revision", field: "fecha_proxima_revision" }
    ]
  },
  citas: {
    titulo: "Citas",
    nuevaVista: "citasformulario",
    urlListado: "citas",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaventa: {
    titulo: "facturaventa",
    nuevaVista: "facturaventaformulario",
    urlListado: "facturaventa",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  },
  facturaservicio: {
    titulo: "facturaservicio",
    nuevaVista: "facturaservicioformulario",
    urlListado: "facturaservicio",
    listado: [
      { label: "cliente", field: "cliente" },
      { label: "fecha", field: "fecha" }
    ]
  }
};
