/* eslint-disable no-unused-vars */
import CardComponent from "@/components/application/CardComponent";
import baseComponente from "@/components/shared/bases/baseComponente";

export default {
  mixins: [baseComponente],
  props: {
    id: Number,
    accionesFormulario: {
      type: Object,
      default: () => new Object()
    },
    config: Object
  },
  components: { CardComponent },
  data() {
    return {};
  },
  computed: {
    accion() {
      return !this.id ? "NUEVO" : "MODIFICAR";
    },
    configuracion() {
      return this.config || this.$parent.$parent.configuracion;
    }
  },
  created() {
    if (this.id) this.obtenerEntidad(this.id);
  },
  methods: {
    guardar(entidad) {
      this.guardarEntidad(entidad || this[this.entidad]);
    },
    editar() {
      this.editarEntidad(this[this.entidad]);
    },
    /**
     * Metodo sobrescribible que se ejecuta antes de guardar la entidad
     * @param {entidad} entidad
     */
    antesGuardar(entidad) {},
    /**
     * Metodo sobrescribible que se ejecuta despues de guardar la entidad
     * @param {entidad} entidad
     */
    despuesGuardar(entidad) {},
    /**
     * Metodo sobreescribible que se ejecuta despues de obtener la entidad
     * @param {entidad} entidad
     */
    despuesObtener(entidad) {},

    //acciones CRUD
    guardarEntidad(entidad) {
      this.antesGuardar(entidad);
      this.peticion(
        {
          method: "post",
          url: `${this.configuracion.urlListado}/`,
          payload: entidad
        },
        (response) => {
          if (response.status == 201) {
            this.emitirMensaje("Guardado con éxito!", "is-success");
            this.despuesGuardar(response);
            if (this.accionesFormulario && this.accionesFormulario["guardar"]) {
              this.accionesFormulario["guardar"]();
            } else this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    },
    obtenerEntidad(id) {
      this.peticion(
        { method: "get", url: `${this.configuracion.urlListado}/${id}` },
        (response) => {
          if (response.status == 200) {
            this.despuesObtener(response.data);
            this[this.entidad] = response.data;
          } else this.notificarErrores(response);
        }
      );
    },
    editarEntidad(entidad) {
      this.antesGuardar(entidad);
      this.peticion(
        {
          method: "put",
          url: `${this.configuracion.urlListado}/${entidad.id}/`,
          payload: entidad
        },
        (response) => {
          if (response.status == 200) {
            this.emitirMensaje("Editado con éxito!", "is-success");
            this.despuesGuardar(response);
            if (this.accionesFormulario && this.accionesFormulario["editar"]) {
              this.accionesFormulario["editar"]();
            } else this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    },
    eliminarEntidad(entidad) {
      this.peticion(
        {
          method: "delete",
          url: `${this.configuracion.urlListado}/${entidad.id}/`
        },
        (response) => {
          if (response.status == 200) {
            this.emitirMensaje("Eliminado con éxito!", "is-success");
            if (
              this.accionesFormulario &&
              this.accionesFormulario["eliminar"]
            ) {
              this.accionesFormulario["eliminar"]();
            } else this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    },
    cancelar() {
      if (this.accionesFormulario && this.accionesFormulario["cancelar"]) {
        this.accionesFormulario["cancelar"]();
      } else this.$router.back();
    }
  }
};
