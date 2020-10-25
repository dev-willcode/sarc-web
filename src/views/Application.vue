<template>
  <div class="columns is-gapless">
    <section class="column is-four-fifths is-full-height">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {},
  mixins: [],
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style scoped>
is-red {
  background-color: red;
}
</style>
