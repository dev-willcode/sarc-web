<template>
  <card-component title="Actualizar contraseña" icon="lock">
    <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Contraseña actual"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input
            v-model="usuarioRegistrado.contrasena_actual"
            type="password"
            password-reveal
          >
          </b-input>
        </b-field>
        <span class="has-text-danger">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Nueva contraseña"
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <b-input
            v-model="usuarioRegistrado.nueva_contrasena"
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
          is: [usuarioRegistrado.nueva_contrasena, 'nueva contraseña']
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
      <hr />
      <button
        v-show="!invalid"
        class="button is-primary  is-fullwidth"
        :class="{ 'is-loading': cargando }"
        @click="handleSubmit(actualizarContrasena)"
      >
        Cambiar Contraseña
      </button>
    </ValidationObserver>
  </card-component>
</template>

<script>
import { mapState } from "vuex";
import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";
export default {
  name: "ActualizarContrasena",
  mixins: [baseComponente],
  components: {
    CardComponent
  },
  data() {
    return {
      cargando: false,
      confirmContrasena: "",
      usuarioRegistrado: {
        id: "",
        contrasena_actual: "",
        nueva_contrasena: ""
      }
    };
  },
  computed: {
    ...mapState(["usuario"])
  },
  created() {
    this.usuarioRegistrado.id = this.usuario.usuario;
  },
  methods: {
    actualizarContrasena() {
      this.peticion(
        {
          method: "post",
          url: `actualizar_contrasena/`,
          payload: this.usuarioRegistrado
        },
        (response) => {
          if (response.status == 200) {
            this.limpiar();
            this.emitirMensaje(
              "Contraseña actualizada correctamente!",
              "is-success"
            );
          } else this.notificarErrores(response);
        }
      );
    },
    limpiar() {
      this.usuarioRegistrado.contrasena_actual = "";
      this.usuarioRegistrado.nueva_contrasena = "";
      this.confirmContrasena = "";
      this.$refs.observer.reset();
    }
  }
};
</script>
