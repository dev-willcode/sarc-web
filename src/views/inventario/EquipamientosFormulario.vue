<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Nombre"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                v-model="equipamiento.nombre"
                placeholder="Nombre del equipamiento..."
              />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Precio"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <numeric
                class="input"
                :class="valid ? 'is-success' : 'is-danger'"
                :options="{
                  currencySymbol: '$',
                  emptyInputBehavior: 'zero'
                }"
                v-model="equipamiento.precio"
                placeholder="Precio del equipamiento..."
              ></numeric>
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
  name: "EquipamientosFormulario",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "equipamiento",
      equipamiento: {
        nombre: "",
        precio: 0
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
