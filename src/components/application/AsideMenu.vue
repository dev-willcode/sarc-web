<template>
  <aside v-show="isAsideVisible" class="aside is-placed-left is-expanded">
    <div class="aside-tools is-flex is-justify-content-center">
      <div class="is-flex is-justify-content-end">
        <!-- <span> <b>SARC</b> Systems </span> -->
        <figure class="image">
          <img src="./../../assets/logo.png" class="img" alt="SARC Systems" />
        </figure>
      </div>
    </div>
    <div class="menu is-menu-main">
      <template v-for="(menu, index) in menu">
        <span :key="`modulo_${index}`" v-if="haveItemPermission(menu)">
          <p class="menu-label">
            {{ menu.modulo }}
          </p>
          <aside-menu-list :key="`vista_${index}`" :menu="menu.vistas" />
        </span>
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import AsideMenuList from "@/components/application/AsideMenuList";

export default {
  name: "AsideMenu",
  components: { AsideMenuList },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(["isAsideVisible", "usuario"])
  },
  methods: {
    haveItemPermission(menu) {
      return this.usuario
        ? menu.vistas.some((vista) =>
            vista.permisos.includes(this.usuario.tipo)
          )
        : false;
    }
  }
};
</script>
<style>
.image > .img {
  width: 150px;
}
</style>
