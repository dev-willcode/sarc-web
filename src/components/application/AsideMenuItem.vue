<template>
  <li :class="{ 'is-active': isDropdownActive }">
    <component
      :is="componentIs"
      :to="itemTo"
      :href="itemHref"
      exact-active-class="is-active"
      :class="{ 'has-icon': !!item.icon, 'has-dropdown-icon': hasDropdown }"
      @click="menuClick"
    >
      <b-icon
        pack="fas"
        v-if="item.icon"
        :icon="item.icon"
        :class="{ 'has-update-mark': item.updateMark }"
        custom-size="default"
      />
      <span v-if="item.label" :class="{ 'menu-item-label': !!item.icon }">{{
        item.label
      }}</span>
      <div v-if="hasDropdown" class="dropdown-icon">
        <b-icon :icon="dropdownIcon" custom-size="default" />
      </div>
    </component>
  </li>
</template>

<script>
export default {
  name: "AsideMenuItem",
  components: {},
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isDropdownActive: false
    };
  },
  computed: {
    componentIs() {
      return this.item.to ? "router-link" : "a";
    },
    hasDropdown() {
      return !!this.item.menu;
    },
    dropdownIcon() {
      return this.isDropdownActive ? "minus" : "plus";
    },
    itemTo() {
      return this.item.to ? this.item.to : null;
    },
    itemHref() {
      return this.item.href ? this.item.href : null;
    }
  },
  methods: {
    menuClick() {
      this.$emit("menu-click", this.item);

      if (this.hasDropdown) {
        this.isDropdownActive = !this.isDropdownActive;
      }
    }
  }
};
</script>
