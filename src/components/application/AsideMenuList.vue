<template>
  <ul :class="{ 'menu-list': !isSubmenuList }">
    <aside-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      @menu-click="menuClick"
      v-show="havePermission(item)"
    />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import AsideMenuItem from "@/components/application/AsideMenuItem";

export default {
  name: "AsideMenuList",
  components: {
    AsideMenuItem
  },
  props: {
    isSubmenuList: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(["usuario"])
  },
  methods: {
    havePermission(item) {
      return item.permisos.includes(this.usuario.tipo);
    },
    menuClick(item) {
      this.$emit("menu-click", item);
    }
  }
};
</script>
