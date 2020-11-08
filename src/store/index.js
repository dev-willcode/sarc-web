import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: null,
    /* NavBar */
    isNavBarVisible: true,
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* User */
    inicioSesion(state, usuario) {
      state.usuario = usuario;
    },
    cerrarSesion(state) {
      state.usuario = null;
    },

    /* Aside Mobile */
    asideMobileStateToggle(state, payload = null) {
      const htmlClassName = "has-aside-mobile-expanded";

      let isShow;

      if (payload !== null) {
        isShow = payload;
      } else {
        isShow = !state.isAsideMobileExpanded;
      }

      if (isShow) {
        document.getElementById("entry").classList.add(htmlClassName);
      } else {
        document.getElementById("entry").classList.remove(htmlClassName);
      }

      state.isAsideMobileExpanded = isShow;
    }
  },
  actions: {}
});
