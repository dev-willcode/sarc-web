<template>
  <div class="hero-head">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="./../../assets/images/logo.png" alt="SARC" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button
              type="is-primary"
              inverted
              @click="$router.push('/login/registro')"
              >Registrarse</b-button
            >
            <b-button
              type="is-primary"
              inverted
              outlined
              @click="$router.push('/login/sesion')"
              >Iniciar sesión</b-button
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
