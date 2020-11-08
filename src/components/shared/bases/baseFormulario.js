import CardComponent from "@/components/application/CardComponent";
import baseComponente from "@/components/shared/bases/baseComponente";
export default {
  mixins: [baseComponente],
  props: {
    id: Number
  },
  components: { CardComponent },
  computed: {
    accion() {
      return !this.id ? "NUEVO" : "MODIFICAR";
    }
  },
  created() {
    if (this.id) this.obtenerEntidad(this.id);
  },
  methods: {
    guardar() {
      this.guardarEntidad(this[this.entidad]);
    },
    editar() {
      this.editarEntidad(this[this.entidad]);
    },
    guardarEntidad(entidad) {
      this.peticion(
        { method: "post", url: `${this.url}/`, payload: entidad },
        (response) => {
          if (response.status == 201) {
            this.emitirMensaje("Guardado con éxito!", "is-success");
            this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    },
    obtenerEntidad(id) {
      this.peticion({ method: "get", url: `${this.url}/${id}` }, (response) => {
        if (response.status == 200) {
          this[this.entidad] = response.data;
        } else this.notificarErrores(response);
      });
    },
    editarEntidad(entidad) {
      this.peticion(
        { method: "put", url: `${this.url}/${entidad.id}/`, payload: entidad },
        (response) => {
          if (response.status == 200) {
            this.emitirMensaje("Editado con éxito!", "is-success");
            this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    },
    eliminarEntidad(entidad) {
      this.peticion(
        { method: "delete", url: `${this.url}/${entidad.id}/` },
        (response) => {
          if (response.status == 200) {
            this.emitirMensaje("Eliminado con éxito!", "is-success");
            this.$router.back();
          } else this.notificarErrores(response);
        }
      );
    }
  }
};
