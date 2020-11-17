import axios from "axios";
import configuraciones from "@/views/shared/configuraciones";

export default {
  mixins: [],
  props: {},
  components: {},
  data() {
    return {
      cargando: false,
      configuraciones: configuraciones
    };
  },
  computed: {},
  methods: {
    peticion({ method, url, payload }, onResolve, onError) {
      this.cargando = true;
      url += url[url.length - 1] === "/" || url.includes("?") ? "" : "/";
      axios[method](url, payload)
        .then((response) => {
          onResolve(response);
        })
        .catch((error) => {
          console.log(error);
          if (onError) onError(error);
          else {
            if (error.response && [400].includes(error.response.status)) {
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
      this.notificar(
        `Ocurrió un error al procesar la solicitud.<br />
         <b>Revise con atención:</b><br/>
         ${this.procesarErrores(response.data)}`,
        "is-danger"
      );
    },
    notificar(mensaje, tipo) {
      this.$buefy.notification.open({
        duration: 5000,
        message: mensaje,
        position: "is-bottom-right",
        type: tipo,
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
    },
    agregarCeros(num, size) {
      return (Math.pow(10, size) + ~~num).toString().substring(1);
    },
    corregirNumeric(event, referencia) {
      referencia.$emit("input", 10);
    }
  }
};
