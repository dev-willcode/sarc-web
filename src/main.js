import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import config from "@/config";

// estilos
import "@/scss/main.scss";

/* Service Worker */
import "./registerServiceWorker";

/* para configuraciones del proyecto */
config.configurar();

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
