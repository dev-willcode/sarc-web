<template>
  <aside v-show="isAsideVisible" class="aside is-placed-left is-expanded">
    <aside-tools :is-main-menu="true">
      <span slot="label"> <b>SARC</b> Systems </span>
    </aside-tools>
    <div class="menu is-menu-main">
      <template v-for="(menu, index) in menu">
        <p :key="`modulo_${index}`" class="menu-label">
          {{ menu.modulo }}
        </p>
        <aside-menu-list
          :key="`vista_${index}`"
          :menu="menu.vistas"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";
import AsideTools from "@/components/application/AsideTools";
import AsideMenuList from "@/components/application/AsideMenuList";

export default {
  name: "AsideMenu",
  components: { AsideTools, AsideMenuList },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(["isAsideVisible"])
  },
  methods: {
    menuClick() {
      //
    }
  }
};
</script>
