<template>
  <section>
    <b-table
      :loading="cargando"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      :data="value"
    >
      <b-table-column
        v-for="item in configuracion"
        :key="item.field"
        :label="item.label"
        :field="item.field"
        v-slot="props"
        sortable
      >
        <section v-if="!item.editable">
          <b-checkbox
            v-if="item.type === 'boolean'"
            v-model="props.row[item.field]"
          ></b-checkbox>
          <span v-else>{{ props.row[item.field] }}</span>
        </section>
        <section v-else>
          <ValidationObserver ref="observer">
            <validation-provider
              v-if="['integer', 'decimal'].includes(item.type)"
              :rules="item.rules ? item.rules(props.row) : 'required'"
              v-slot="{ errors, valid }"
            >
              <b-field
                :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
              >
                <div class="row">
                  <numeric
                    :ref="`numeric_${item.field}`"
                    class="input"
                    :options="{
                      emptyInputBehavior: 'zero',
                      minimumValue: 0
                    }"
                    :class="valid ? 'is-success' : 'is-danger'"
                    v-model="props.row[item.field]"
                  ></numeric>
                  <span class="has-text-danger">{{ errors[0] }}</span>
                </div>
              </b-field>
            </validation-provider>
          </ValidationObserver>
        </section>
      </b-table-column>
      <b-table-column
        custom-key="actions"
        cell-class="is-actions-cell"
        width="200"
        v-slot="props"
      >
        <button
          v-if="props.row[disabledItem]"
          class="button is-small is-fullwidth is-black"
          disabled
        >
          <span>No se puede eliminar</span>
        </button>
        <button
          v-else
          class="button is-small is-fullwidth is-danger"
          @click="eliminar(props.row)"
        >
          <b-icon pack="fas" icon="times" size="is-small" />
          <span>Eliminar</span>
        </button>
      </b-table-column>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Sin datos</p>
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
    value: Array,
    disabledItem: String,
    configuracion: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listado: [],
      paginated: true,
      perPage: 10
    };
  },
  computed: {},
  methods: {
    eliminar(data) {
      this.value.splice(this.value.indexOf(data), 1);
    }
  }
};
</script>
