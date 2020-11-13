<template>
  <section>
    <b-button
      v-if="type === 'button'"
      type="is-primary"
      icon-pack="fas"
      :icon-left="icon"
      @click="abrirModal"
    >
      {{ label }}
    </b-button>
    <validation-provider v-else rules="required" v-slot="{ errors, valid }">
      <b-field
        :label="label"
        horizontal
        :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
      >
        <div class="row">
          <span class="is-flex"
            ><b-input
              class="is-flex is-flex-grow-1"
              expanded
              readonly
              v-model="entidad[fieldVisible]"
            />
            <b-button
              icon-pack="fas"
              icon-left="search"
              type="is-primary"
              class="ml-2"
              @click="abrirModal"
              v-if="!disabled"
            />
            <b-button
              icon-pack="fas"
              icon-left="times"
              type="is-danger"
              class="ml-2"
              @click="resetear"
              v-if="entidad[fieldVisible] && !disabled"
            />
          </span>
          <span class="has-text-danger">{{ errors[0] }}</span>
        </div>
      </b-field>
    </validation-provider>
    <b-modal v-model="modalActivo">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Seleccione un registro ...</p>
        </header>
        <section class="modal-card-body">
          <card-component
            class="has-table has-mobile-sort-spaced"
            :title="configuracion.titulo"
            v-if="modalActivo"
          >
            <tabla-seleccionable
              :url="configuracion.urlListado"
              :argumentos="argumentos"
              :configuracion="configuracion.listado"
              @seleccionar="establecerEntidad"
            />
          </card-component>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <b-button
            type="is-primary"
            @click="$router.push({ name: configuracion.formulario })"
            >Crear registro</b-button
          >
          <b-button type="is-danger" @click="cerrarModal()">Cancelar</b-button>
        </footer>
      </div>
    </b-modal>
  </section>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import TablaSeleccionable from "@/components/application/TablaSeleccionable";
import CardComponent from "@/components/application/CardComponent";
export default {
  name: "SeleccionarEntidad",
  mixins: [baseComponente],
  components: { CardComponent, TablaSeleccionable },
  props: {
    type: {
      type: String,
      default: "input"
    },
    icon: String,
    value: Number,
    label: String,
    fieldVisible: String,
    argumentos: String,
    configuracion: Object,
    disabled: Boolean
  },
  data() {
    return {
      modalActivo: false,
      entidad: {}
    };
  },
  computed: {},
  created() {},
  methods: {
    establecerCampoVisible(dato) {
      this.entidad = {};
      this.entidad[this.fieldVisible] = dato;
      this.entidad.id = this.value;
    },
    recuperarEntidad(id) {
      this.peticion(
        { method: "get", url: `${this.configuracion.urlListado}/${id}/` },
        ({ data }) => this.establecerEntidad(data)
      );
    },
    establecerEntidad(entidad) {
      this.$emit("input", entidad.id);
      this.$emit("modelo", entidad);
      this.entidad = entidad;
      this.cerrarModal();
    },
    resetear() {
      this.$emit("input", null);
      this.entidad = {};
    },
    abrirModal() {
      this.modalActivo = true;
    },
    cerrarModal() {
      this.modalActivo = false;
    }
  }
};
</script>
