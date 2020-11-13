<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required|min:10" v-slot="{ errors, valid }">
          <b-field
            label="Cédula"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                v-model="vendedores.dni"
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
                v-model="vendedores.nombre"
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
                v-model="vendedores.domicilio"
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
                v-model="vendedores.correo"
                placeholder="dirección de correo..."
              />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <br />
        <b-field horizontal>
          <b-field grouped>
            <div class="control">
              <b-button
                v-if="accion === 'NUEVO'"
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(guardar)"
                >Guardar</b-button
              >
              <b-button
                v-else
                type="is-primary"
                :class="{ 'is-loading': cargando }"
                @click="handleSubmit(editar)"
                >Editar</b-button
              >
            </div>
            <div class="control">
              <b-button type="is-primary is-outlined" @click="$router.back()"
                >Cancelar</b-button
              >
            </div>
          </b-field>
        </b-field>
      </ValidationObserver>
    </div>
  </card-component>
</template>

<script>
import baseFormulario from "@/components/shared/bases/baseFormulario";

export default {
  name: "Vendedores",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "vendedores",
      url: "vendedor",
      vendedores: {
        dni: "",
        nombre: "",
        domicilio: "",
        correo: "",
        usuario: null
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
