<template>
  <header-view titulo="Clientes" :stack-ruta="['SARC', 'Cliente']">
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          title="Clientes"
        >
          <clients-table-sample
            :data-url="`${$router.options.base}data-sources/clients.json`"
          />
        </card-component>
      </section>
    </template>
    <template v-slot:botones>
      <b-button>
        Nuevo
      </b-button>
    </template>
  </header-view>
</template>

<script>
import baseVista from "@/components/shared/bases/baseVista";
import ClientsTableSample from "@/components/application/ClientsTableSample";
export default {
  name: "Clientes",
  mixins: [baseVista],
  props: {
    icon: String
  },
  components: {
    ClientsTableSample
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
