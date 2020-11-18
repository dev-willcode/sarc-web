<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required|min:13" v-slot="{ errors, valid }">
          <b-field
            label="DNI"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                maxlength="13"
                v-model="servicio.dni"
                placeholder="Identificador..."
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
                v-model="servicio.nombre"
                placeholder="nombres y apellidos..."
              />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Dirección"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                v-model="servicio.domicilio"
                placeholder="Dirección o domicilio..."
              />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Tipo"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-select
                v-model="servicio.tipo"
                placeholder="Elija la marca..."
                expanded
              >
                <option value="Consesionario">Consesionario</option>
                <option value="Taller">Taller</option>
              </b-select>
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
              <b-button type="is-primary is-outlined" @click="cancelar"
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
  name: "ServiciosFormulario",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "servicio",
      servicio: {
        dni: "",
        nombre: "",
        domicilio: "",
        tipo: ""
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
