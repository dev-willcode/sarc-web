<template>
  <section class="column is-full sesion">
    <h1 class="is-size-4 has-text-centered">Inicio de sesión</h1>
    <br />
    <b-field label="Correo">
      <b-input v-model="usuario.correo"></b-input>
    </b-field>
    <b-field label="Contraseña">
      <b-input
        v-model="usuario.password"
        type="password"
        value=""
        password-reveal
      >
      </b-input>
    </b-field>
    <br />
    <b-button type="is-primary" expanded @click="$router.push('/app/')"
      >Iniciar sesión</b-button
    ><br />
    <p class="has-text-centered">
      Aún no tienes cuenta?
      <router-link to="register">Regístrate</router-link>.
    </p>
  </section>
</template>

<script>
export default {
  name: "Sesion",
  props: {},
  mixins: [],
  data() {
    return {
      usuario: {
        correo: "",
        password: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.sesion {
  padding: 0 10vw;
}
</style>
