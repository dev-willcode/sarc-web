<template>
  <section>
    <b-table
      :loading="cargando"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      :data="listado"
    >
      <template v-for="item in configuracion">
        <b-table-column :key="item.id" v-bind="item">
          <template v-if="item.searchable" slot="searchable" slot-scope="props">
            <b-input
              v-if="item.type !== 'boolean'"
              v-model="props.filters[item.field]"
              placeholder="Buscar..."
              icon="search"
              icon-pack="fas"
              class="is-fullwidth"
            />
          </template>
          <template v-slot="props">
            <b-checkbox
              v-if="item.type === 'boolean'"
              v-model="props.row[item.field]"
              disabled
            ></b-checkbox>
            <span v-else>{{ props.row[item.field] }}</span>
          </template>
        </b-table-column>
      </template>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        width="200"
        v-slot="props"
      >
        <button
          class="button is-small is-fullwidth is-primary"
          @click="seleccionar(props.row)"
        >
          <b-icon icon="check" size="is-small" />
          <span>Seleccionar</span>
        </button>
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

export default {
  name: "TablaSeleccionable",
  mixins: [baseComponente],
  components: {},
  props: {
    url: String,
    argumentos: String,
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
        }
      );
    },
    seleccionar(data) {
      this.$emit("seleccionar", data);
    }
  }
};
</script>
