import Vue from "vue";
import axios from "axios";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { VueMaskDirective } from "v-mask";

const configuraciones = {
  configurar() {
    this.configurarAxios();
    this.configurarValidaciones();
    this.configurarDirectivas();
  },
  configurarAxios() {
    axios.defaults.baseURL = "http://localhost:8000/api/";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  },
  configurarValidaciones() {
    Vue.component("ValidationProvider", ValidationProvider);
    Vue.component("ValidationObserver", ValidationObserver);

    extend("required", {
      ...required,
      message: "El campo es requerido"
    });
    extend("email", {
      ...email,
      message: "El campo debe ser un email válido"
    });
    extend("min", {
      ...min,
      params: ["length"],
      message: "El campo debe tener al menos {length} dígitos"
    });
    extend("min", {
      ...min,
      params: ["length"],
      message: "El campo debe tener al menos {length} dígitos"
    });
    extend("is", {
      validate: (value, { arg }) => value === arg,
      params: ["arg", "label"],
      message: "El campo debe ser igual a {label}"
    });
  },
  configurarDirectivas() {
    Vue.directive("mask", VueMaskDirective);
  }
};
export default configuraciones;
