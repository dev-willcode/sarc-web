<template>
  <div>
    <title-bar :title-stack="stackRuta" />
    <hero-bar>
      {{ titulo }}
      <template v-slot:right>
        <slot name="botones" />
      </template>
    </hero-bar>
    <slot name="contenido"></slot>
  </div>
</template>

<script>
import TitleBar from "@/components/application/TitleBar";
import HeroBar from "@/components/application/HeroBar";
export default {
  name: "HeaderView",
  props: {
    stackRuta: Array,
    titulo: String
  },
  components: {
    HeroBar,
    TitleBar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
