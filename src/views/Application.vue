<template>
  <div
    id="entry"
    class="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded"
  >
    <div id="body">
      <nav-bar />
      <aside-menu :menu="menu" />
      <router-view :key="$route.path" />
    </div>
  </div>
</template>
<script>
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
    menu() {
      return menus;
    }
  }
};
</script>
