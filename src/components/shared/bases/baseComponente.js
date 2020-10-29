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
    peticion(HttpMetthod, url, callback) {
      this.cargando = true;
      axios[HttpMetthod](url)
        .then((response) => {
          callback(response);
        })
        .catch(() => {
          this.$buefy.toast.open({
            message: `Error: No se consiguió conectar con el servicio de datos.`,
            type: "is-danger"
          });
        })
        .finally(() => {
          this.cargando = false;
        });
    }
  }
};
