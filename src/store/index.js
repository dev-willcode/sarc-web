import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: JSON.parse(localStorage.getItem("usuario")),
    /* NavBar */
    isNavBarVisible: true,
    isAsideVisible: true,
    isAsideMobileExpanded: false
  },
  mutations: {
    /* User */
    inicioSesion(state, usuario) {
      state.usuario = usuario;
      localStorage.setItem("usuario", JSON.stringify(usuario));
    },
    cerrarSesion(state) {
      state.usuario = {};
      localStorage.removeItem("usuario");
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
  actions: {
    actualizarUsuario(context, usuario) {
      context.commit("inicioSesion", {
        dni: usuario.dni,
        nombre: usuario.nombre,
        domicilio: usuario.domicilio,
        correo: usuario.correo,
        id: usuario.id,
        tipo: context.state.usuario.tipo,
        usuario: context.state.usuario.usuario
      });
    }
  }
});
