<template>
  <header-view
    :titulo="configuracion.titulo"
    :stack-ruta="['SARC', configuracion.titulo]"
  >
    <template v-slot:botones>
      <b-button
        v-if="!$route.path.includes('formulario')"
        @click="$router.push({ name: configuracion.formulario })"
      >
        Añadir
      </b-button>
      <b-button v-else @click="$router.back()">
        Regresar
      </b-button>
    </template>
    <template v-slot:contenido>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          :title="configuracion.titulo"
          v-if="!$route.path.includes('formulario')"
        >
          <tabla-listado
            :url="configuracion.urlListado"
            :configuracion="configuracion.listado"
            :formulario="configuracion.formulario"
          />
        </card-component>
        <router-view v-else :key="$route.path" />
      </section>
    </template>
  </header-view>
</template>

<script>
import baseVista from "@/components/shared/bases/baseVista";
import TablaListado from "@/components/application/TablaListado";

export default {
  name: "Vistas",
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
