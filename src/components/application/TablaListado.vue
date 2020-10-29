<template>
  <section>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObjectName"
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <b-table
      :loading="cargando"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="name"
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
        {{ props.row[item.field] }}
      </b-table-column>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        width="200"
        v-slot="props"
      >
        <div class="buttons is-centeded">
          <router-link
            :to="{ name: 'client.edit', params: { id: props.row.id } }"
            class="button is-small is-primary"
          >
            <b-icon icon="account-edit" size="is-small" />
            <span>Editar</span>
          </router-link>
          <button
            class="button is-small is-danger"
            type="button"
            @click.prevent="trashModal(props.row)"
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
import ModalBox from "@/components/application/ModalBox";
export default {
  name: "TablaListado",
  mixins: [baseComponente],
  components: { ModalBox },
  props: {
    url: String,
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

      trashObject: null,
      isModalActive: false
    };
  },
  computed: {
    trashObjectName() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      return null;
    }
  },
  created() {
    if (this.url) {
      this.peticion("get", this.url, ({ data }) => {
        this.listado = data;
      });
    }
  },
  methods: {
    trashModal(trashObject) {
      this.trashObject = trashObject;
      this.isModalActive = true;
    },
    trashConfirm() {
      this.isModalActive = false;
      this.$buefy.snackbar.open({
        message: "Confirmed",
        queue: false
      });
    },
    trashCancel() {
      this.isModalActive = false;
    }
  }
};
</script>
