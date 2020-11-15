<template>
  <div class="is-user-avatar">
    <img src="@/assets/images/user.png" :alt="usuario.nombre" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UserAvatar",
  props: {
    avatar: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapState(["usuario"])
  }
};
</script>
