<template>
  <card-component title="Editar datos personales">
    <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
      <validation-provider rules="required|min:10" v-slot="{ errors, valid }">
        <b-field
          label="Cédula"
          horizontal
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <div class="row">
            <b-input
              v-model="perfil.dni"
              maxlength="10"
              placeholder="cédula de identidad..."
            />
            <span class="has-text-danger">{{ errors[0] }}</span>
          </div>
        </b-field>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Nombres"
          horizontal
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <div class="row">
            <b-input
              v-model="perfil.nombre"
              placeholder="nombres y apellidos..."
            />
            <span class="has-text-danger">{{ errors[0] }}</span>
          </div>
        </b-field>
      </validation-provider>

      <validation-provider rules="required" v-slot="{ errors, valid }">
        <b-field
          label="Domicilio"
          horizontal
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <div class="row">
            <b-input
              v-model="perfil.domicilio"
              placeholder="dirección o domicilio..."
            />
            <span class="has-text-danger">{{ errors[0] }}</span>
          </div>
        </b-field>
      </validation-provider>

      <validation-provider rules="required|email" v-slot="{ errors, valid }">
        <b-field
          label="Correo"
          horizontal
          :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
        >
          <div class="row">
            <b-input
              v-model="perfil.correo"
              placeholder="dirección de correo..."
            />
            <span class="has-text-danger">{{ errors[0] }}</span>
          </div>
        </b-field>
      </validation-provider>
      <hr />
      <button
        v-show="!sonIguales"
        class="button is-primary  is-fullwidth"
        :class="{ 'is-loading': cargando }"
        @click="handleSubmit(actualizarPerfil)"
      >
        Actualizar datos
      </button>
    </ValidationObserver>
  </card-component>
</template>

<script>
import { mapState, mapActions } from "vuex";
import baseComponente from "@/components/shared/bases/baseComponente";
import CardComponent from "@/components/application/CardComponent";

export default {
  name: "DatosPersonales",
  mixins: [baseComponente],
  components: {
    CardComponent
  },
  data() {
    return {
      cargando: false,
      perfil: {
        dni: "",
        nombre: "",
        correo: "",
        domicilio: ""
      }
    };
  },
  computed: {
    ...mapState(["usuario"]),
    sonIguales() {
      return (
        this.usuario.dni == this.perfil.dni &&
        this.usuario.nombre == this.perfil.nombre &&
        this.usuario.correo == this.perfil.correo &&
        this.usuario.domicilio == this.perfil.domicilio
      );
    }
  },
  created() {
    this.perfil = { ...this.usuario };
  },
  methods: {
    ...mapActions(["actualizarUsuario"]),
    actualizarPerfil() {
      let url =
        this.usuario.tipo == "Cliente"
          ? "cliente"
          : this.usuario.tipo == "Vendedor"
          ? "vendedor"
          : this.usuario.tipo == "Mecanico"
          ? "mecanico"
          : null;
      if (url) {
        this.peticion(
          {
            method: "put",
            url: `${url}/${this.usuario.id}/`,
            payload: this.perfil
          },
          (response) => {
            if (response.status == 200) {
              this.emitirMensaje("Editado con éxito!", "is-success");
              this.actualizarUsuario(response.data);
            } else this.notificarErrores(response);
          }
        );
      }
    }
  }
};
</script>
