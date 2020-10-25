<template>
  <div class="columns is-gapless">
    <div class="column">
      <div class="is-flex is-flex-wrap-wrap is-full-height ">
        <section class="column is-full is-align-self-flex-start">
          <router-link to="/">
            <i class="back is-size-3 fa fa-arrow-left" />
          </router-link>
        </section>
        <router-view />
      </div>
    </div>
    <div
      id="login-background"
      class="column is-flex is-full-height login-background"
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
    return {
      usuario: {
        user: "",
        password: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style>
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
