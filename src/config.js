import Vue from "vue";
import axios from "axios";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  required,
  email,
  min,
  double,
  max_value
} from "vee-validate/dist/rules";
import { extend } from "vee-validate";
import { VueMaskDirective } from "v-mask";
import VueAutonumeric from "vue-autonumeric/src/components/VueAutonumeric.vue";

const configuraciones = {
  configurar() {
    this.configurarAxios();
    this.configurarValidaciones();
    this.configurarDirectivas();
    this.configurarDecimales();
  },
  configurarAxios() {
    // local development
    // axios.defaults.baseURL = "http://localhost:8000/api/";
    // production
    axios.defaults.baseURL = "http://rest-service-sarc.herokuapp.com/api/";
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
    extend("decimal", {
      ...double,
      message: "El campo debe tener un máximo de {decimals} decimales"
    });
    extend("max_value", {
      ...max_value,
      params: ["max"],
      message: "El campo debe tener un valor maximo de {max}"
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
  },
  configurarDecimales() {
    Vue.component("numeric", VueAutonumeric);
  }
};
export default configuraciones;
