<template>
  <header-view titulo="Cliente" :stack-ruta="['SARC', 'Formulario', 'Cliente']">
  </header-view>
</template>

<script>
import baseVista from "@/components/shared/bases/baseVista";

export default {
  name: "Vista",
  mixins: [baseVista],
  props: {
    icon: String
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
