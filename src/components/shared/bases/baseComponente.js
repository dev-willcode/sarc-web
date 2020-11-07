import axios from "axios";
export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      cargando: false
    };
  },
  computed: {},
  methods: {
    peticion({ method, url, payload }, onResolve, onError) {
      this.cargando = true;
      axios[method](url, payload)
        .then((response) => {
          onResolve(response);
        })
        .catch((error) => {
          if (onError) onError(error);
          else {
            this.emitirMensaje(
              `Error: No se consiguió conectar con el servicio de datos.`,
              "is-danger"
            );
          }
        })
        .finally(() => {
          this.cargando = false;
        });
    },
    notificarErrores(response) {
      console.log(response);
    },
    emitirMensaje(mensaje, tipo = "is-dark") {
      this.$buefy.toast.open({
        message: mensaje,
        type: tipo
      });
    }
  }
};
