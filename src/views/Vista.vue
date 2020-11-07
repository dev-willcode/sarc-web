<template>
  <header-view
    :titulo="configuracion.titulo"
    :stack-ruta="['SARC', configuracion.titulo]"
  >
    <template v-slot:botones>
      <b-button @click="$router.push(configuracion.formulario)">
        Añadir
      </b-button>
    </template>
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          :title="configuracion.titulo"
        >
          <tabla-listado
            :url="configuracion.urlListado"
            :configuracion="configuracion.listado"
            :formulario="configuracion.formulario"
          />
        </card-component>
      </section>
    </template>
  </header-view>
</template>

<script>
import baseVista from "@/components/shared/bases/baseVista";
import TablaListado from "@/components/application/TablaListado";

export default {
  name: "Clientes",
  mixins: [baseVista],
  props: {
    configuracion: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    TablaListado
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
