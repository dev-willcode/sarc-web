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
      url += url[url.length - 1] === "/" ? "" : "/";
      axios[method](url, payload)
        .then((response) => {
          onResolve(response);
        })
        .catch((error) => {
          if (onError) onError(error);
          else {
            if (error.response && Array.isArray(error.response.data)) {
              this.notificarErrores(error.response);
            } else {
              this.emitirMensaje(
                `Error: No se consiguió conectar con el servicio de datos.`,
                "is-danger"
              );
            }
          }
        })
        .finally(() => {
          this.cargando = false;
        });
    },
    notificarErrores(response) {
      this.$buefy.notification.open({
        duration: 5000,
        message: `Ocurrió un error al procesar la solicitud.<br />
         <b>Revise con atención:</b><br/>
         ${this.procesarErrores(response.data)}`,
        position: "is-bottom-right",
        type: "is-danger",
        hasIcon: true
      });
    },
    procesarErrores(data) {
      let errores = "";
      for (const error in data) {
        errores += `${error}: ${data[error][0]}<br/>`;
      }
      return errores;
    },
    emitirMensaje(mensaje, tipo = "is-dark") {
      this.$buefy.toast.open({
        message: mensaje,
        type: tipo
      });
    }
  }
};
