<template>
  <card-component
    class="has-table has-mobile-sort-spaced"
    title="Mi historial de citas"
  >
    <tabla-listado
      ref="tabla"
      :url="configuraciones.citas.urlListado"
      :configuracion="configuracionCitas"
      :argumentos="`?cliente=${usuario.id}&ordering=-fecha,-hora,-id`"
      :custom-actions="true"
      @listado="establecerUltimaCita"
    >
      <template v-slot:acciones="{ data }">
        <button v-if="!data.estado" class="button is-small is-black" disabled>
          <span>No se puede cancelar</span>
        </button>
        <button
          v-else
          class="button is-small is-danger"
          type="button"
          @click.prevent="cancelarCita(data)"
        >
          <b-icon pack="fas" icon="times" size="is-small" />
          <span>Cancelar cita </span>
        </button>
      </template>
    </tabla-listado>
  </card-component>
</template>
<script>
import { mapState } from "vuex";

import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";
import TablaListado from "@/components/application/TablaListado";

export default {
  name: "TablaCitas",
  mixins: [baseComponente],
  components: { CardComponent, TablaListado },
  props: {
    value: Array,
    label: String,
    configuracion: Array
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["usuario"]),
    configuracionTabla() {
      return this.configuracion || this.configuraciones.equipamiento.listado;
    },
    configuracionCitas() {
      return this.configuraciones.citas.listado.slice(1);
    }
  },
  created() {},
  methods: {
    cancelarCita(cita) {
      this.peticion(
        {
          method: "put",
          url: `${this.configuraciones.citas.urlListado}/${cita.id}/`,
          payload: { ...cita, estado: false }
        },
        (response) => {
          if (response.status == 200) {
            this.emitirMensaje("Cita cancelada con exito!", "is-success");
            this.listar();
          } else this.notificarErrores(response);
        }
      );
    },
    establecerUltimaCita(citas) {
      this.$emit("ultimaCita", citas[0]);
    },
    listar() {
      this.$refs.tabla.listar();
    }
  }
};
</script>
