<template>
  <div
    id="entry"
    class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
  >
    <div id="body">
      <nav-bar />
      <aside-menu :menu="menu" />
      <router-view :key="$route.path" />
      <section
        v-if="['/apps/', '/apps'].includes($route.path)"
        class="hero is-white is-large m-5"
      >
        <section class="column is-6 has-background-white m-5">
          <p class="title">
            <span class="is-size-1">Bienvenido a SARC Systems</span>
          </p>
          <span class="button is-primary is-rounded">
            La mejor solución para tus necesidades!</span
          >
          <hr />
          <span>
            Hola {{ usuario.nombre }} esperamos que tu estadia sea placentera
          </span>
        </section>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import menus from "@/views/shared/menus";
import NavBar from "@/components/application/NavBar";
import AsideMenu from "@/components/application/AsideMenu";

export default {
  name: "Application",
  components: {
    AsideMenu,
    NavBar
  },
  computed: {
    ...mapState(["usuario"]),
    menu() {
      return menus;
    }
  }
};
</script>
<style scoped>
#hero {
  background-image: url("./../assets/images/hero-section-1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
</style>
