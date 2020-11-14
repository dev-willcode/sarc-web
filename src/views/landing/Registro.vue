<template>
  <section class="column is-full sesion">
    <div class="is-size-4">
      <router-link to="/">
        <i class="back fa fa-arrow-left" />
      </router-link>
    </div>
    <h1 class="is-size-4 has-text-centered">Registro de cliente</h1>
    <br />
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Nombres y apellidos"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="cliente.nombre"></b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required|min:10" v-slot="{ errors, valid }">
        <b-field
          label="Cédula"
          v-mask="'##########'"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="cliente.dni"></b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Domicilio"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="cliente.domicilio"></b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required|email" v-slot="{ errors, valid }">
        <b-field
          label="Correo"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="cliente.correo"></b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Contraseña"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input
            v-model="cliente.usuario.contrasena"
            type="password"
            password-reveal
          >
          </b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider
        :rules="{
          required: true,
          is: [cliente.usuario.contrasena, 'contraseña']
        }"
        v-slot="{ errors, valid }"
      >
        <b-field
          label="Confirmar contraseña"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input v-model="confirmContrasena" type="password" password-reveal>
          </b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>
      <br />
      <button
        class="button is-primary is-fullwidth"
        :class="{ 'is-loading': cargando }"
        @click="handleSubmit(registrar)"
      >
        Regístrate
      </button>
    </ValidationObserver>
    <br />
    <p class="has-text-centered">
      Ya tienes una cuenta?
      <router-link to="sesion">Inicia sesión</router-link>.
    </p>
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
      confirmContrasena: "",
      cliente: {
        nombre: "",
        dni: "",
        domicilio: "",
        correo: "",
        usuario: {
          correo: "",
          contrasena: ""
        }
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapMutations(["inicioSesion"]),
    registrar() {
      this.cliente.usuario.correo = this.cliente.correo;
      this.peticion(
        { method: "post", url: "register", payload: this.cliente },
        (response) => {
          if (response.status === 201) {
            this.emitirMensaje("Cliente registrado con exito!", "is-success");
            this.inicioSesion(response.data);
            this.$router.push({ name: "Apps" });
          } else this.notificarErrores(response);
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
