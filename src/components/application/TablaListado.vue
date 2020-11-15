<template>
  <section>
    <modal-borrar
      :is-active="modalActivo"
      @confirm="eliminar"
      @cancel="cancelar"
    />
    <b-table
      :loading="cargando"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      :data="listado"
    >
      <b-table-column
        v-for="item in configuracion"
        :key="item.field"
        :label="item.label"
        :field="item.field"
        v-slot="props"
        sortable
      >
        <b-checkbox
          v-if="item.type === 'boolean'"
          v-model="props.row[item.field]"
          disabled
        ></b-checkbox>
        <span v-else>{{ props.row[item.field] }}</span>
      </b-table-column>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        width="200"
        v-slot="props"
      >
        <div v-if="customActions">
          <slot name="acciones" :data="props.row"></slot>
        </div>
        <div class="buttons is-centeded" v-else>
          <router-link
            :to="{
              name: formulario,
              params: { id: props.row.id }
            }"
            class="button is-small is-primary"
          >
            <b-icon icon="account-edit" size="is-small" />
            <span>Editar</span>
          </router-link>
          <button
            class="button is-small is-danger"
            type="button"
            @click.prevent="confirmarEliminacion(props.row)"
          >
            <b-icon icon="trash-can" size="is-small" />
            <span>Eliminar</span>
          </button>
        </div>
      </b-table-column>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="cargando">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Recibiendo datos...</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Sin datos que mostrar&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </section>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import ModalBorrar from "@/components/application/ModalBorrar";
export default {
  name: "TablaListado",
  mixins: [baseComponente],
  components: { ModalBorrar },
  props: {
    url: String,
    formulario: String,
    argumentos: String,
    customActions: { type: Boolean, default: false },
    configuracion: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listado: [],
      paginated: true,
      perPage: 10,
      modalActivo: false,
      entidad: null
    };
  },
  computed: {},
  created() {
    if (this.url) this.listar();
  },
  methods: {
    listar() {
      this.peticion(
        { method: "get", url: `${this.url}/${this.argumentos || ""}` },
        ({ data }) => {
          this.listado = data.results;
          this.$emit("listado", data.results);
        }
      );
    },
    confirmarEliminacion(entidad) {
      this.entidad = entidad;
      this.modalActivo = true;
    },
    eliminar() {
      this.modalActivo = false;
      this.peticion(
        { method: "delete", url: `${this.url}/${this.entidad.id}/` },
        (response) => {
          if (response.status == 204) {
            this.emitirMensaje("Eliminado con éxito!", "is-success");
            this.listar();
          } else this.notificarErrores(response);
        }
      );
    },
    cancelar() {
      this.modalActivo = false;
    }
  }
};
</script>
