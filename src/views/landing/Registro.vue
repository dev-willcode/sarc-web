<template>
  <section class="column is-full sesion">
    <h1 class="is-size-4 has-text-centered">Registro de usuario</h1>
    <br />
    <b-field label="Nombre">
      <b-input v-model="usuario.nombre"></b-input>
    </b-field>
    <b-field label="Cédula">
      <b-input v-model="usuario.dni"></b-input>
    </b-field>
    <b-field label="Domicilio">
      <b-input v-model="usuario.domicilio"></b-input>
    </b-field>
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
    <b-field label="Confirme contraseña">
      <b-input
        v-model="passwordConfirmada"
        type="password"
        value=""
        password-reveal
      >
      </b-input>
    </b-field>
    <br />
    <b-button type="is-primary" expanded>Regístrate</b-button><br />
    <p class="has-text-centered">
      Ya tienes una cuenta?
      <router-link to="sesion">Inicia sesión</router-link>.
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
      passwordConfirmada: "",
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
<style>
.sesion {
  padding: 0 10vw;
}
</style>
