<template>
  <div class="hero-head">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../../../public/images/logo.png" alt="SARC" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary is-inverted is-outlined is-rounded">
              <strong>Registrarse</strong>
            </a>
            <a class="button is-primary is-inverted is-outlined is-rounded">
              <strong>Iniciar sesión</strong>
            </a>
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
