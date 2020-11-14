<template>
  <section class="column is-full is-align-content-center sesion">
    <div class="is-size-4">
      <router-link to="/">
        <i class="back fa fa-arrow-left" />
      </router-link>
    </div>
    <h1 class="is-size-4 has-text-centered">Inicio de sesión</h1>
    <br />
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <validation-provider rules="required|email" v-slot="{ errors, valid }">
        <b-field
          label="Correo"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="usuario.correo"></b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Contraseña"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="usuario.contrasena" type="password" password-reveal>
          </b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>
      <br />
      <button
        class="button is-primary is-fullwidth"
        :class="{ 'is-loading': cargando }"
        @click="handleSubmit(login)"
      >
        Iniciar sesión
      </button>
      <br />
      <p class="has-text-centered">
        Aún no tienes cuenta?
        <router-link to="register">Regístrate</router-link>.
      </p>
    </ValidationObserver>
  </section>
</template>

<script>
import baseComponente from "@/components/shared/bases/baseComponente";
import { mapMutations } from "vuex";

export default {
  name: "Sesion",
  props: {},
  mixins: [baseComponente],
  data() {
    return {
      usuario: {
        correo: "",
        contrasena: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapMutations(["inicioSesion"]),
    login() {
      this.peticion(
        { method: "post", url: "login", payload: this.usuario },
        (response) => {
          if (response.status === 200) {
            this.inicioSesion(response.data);
            this.$router.push({ name: "Apps" });
          } else this.notificarErrores(response);
        },
        () => {
          this.emitirMensaje(
            `Error: Usuario o contrasena incorrectos.`,
            "is-danger"
          );
        }
      );
    }
  }
};
</script>

<style scoped>
.sesion {
  padding: 0 10vw;
}
</style>
