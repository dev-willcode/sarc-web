<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a
        class="navbar-item is-hidden-desktop"
        @click.prevent="menuToggleMobile"
      >
        <b-icon pack="fas" :icon="menuToggleMobileIcon" />
      </a>
    </div>
    <div class="navbar-brand is-right">
      <a
        class="navbar-item navbar-item-menu-toggle is-hidden-desktop"
        @click.prevent="menuNavBarToggle"
      >
        <b-icon :icon="menuNavBarToggleIcon" custom-size="default" />
      </a>
    </div>
    <div
      class="navbar-menu fadeIn animated faster"
      :class="{ 'is-active': isMenuNavBarActive }"
    >
      <div class="navbar-end">
        <nav-bar-menu class="has-divider has-user-avatar" v-if="usuario">
          <b-icon pack="fas" icon="user" custom-size="default"></b-icon>
          <div class="is-user-name">
            <span>{{ usuario.nombre }}</span>
          </div>
          <div slot="dropdown" class="navbar-dropdown is-right">
            <a class="navbar-item" @click="cerrar">
              <b-icon icon="logout" custom-size="default"></b-icon>
              <span>Cerrar sesión</span>
            </a>
          </div>
        </nav-bar-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NavBarMenu from "@/components/application/NavBarMenu";

export default {
  name: "NavBar",
  components: {
    NavBarMenu
  },
  data() {
    return {
      isMenuNavBarActive: false
    };
  },
  computed: {
    menuNavBarToggleIcon() {
      return this.isMenuNavBarActive ? "close" : "dots-vertical";
    },
    menuToggleMobileIcon() {
      return this.isAsideMobileExpanded ? "bars" : "bars";
    },
    ...mapState(["isNavBarVisible", "isAsideMobileExpanded", "usuario"])
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isMenuNavBarActive = false;
    });
  },
  methods: {
    ...mapMutations(["cerrarSesion"]),
    menuToggleMobile() {
      this.$store.commit("asideMobileStateToggle");
    },
    menuNavBarToggle() {
      this.isMenuNavBarActive = !this.isMenuNavBarActive;
    },
    cerrar() {
      this.cerrarSesion();
      this.$router.push({ path: "/" });
    }
  }
};
</script>
