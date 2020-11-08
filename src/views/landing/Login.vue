<template>
  <div class="columns is-gapless">
    <div class="column">
      <div
        class="is-flex is-flex-wrap-wrap is-full-height is-align-items-center"
      >
        <router-view />
      </div>
    </div>
    <div
      id="login-background"
      class="column is-flex is-full-height login-background is-hidden-mobile"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Login",
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
#login-background {
  background-image: url("./.././../assets/images/login-background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}

.back {
  padding: 0.5em;
}
</style>
