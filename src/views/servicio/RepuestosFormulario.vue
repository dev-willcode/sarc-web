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
                v-model="repuesto.nombre"
                placeholder="Nombre del repuesto..."
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
                v-model="repuesto.precio"
                placeholder="Precio del repuesto..."
              ></numeric>
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Cantidad"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <numeric
                class="input"
                :class="valid ? 'is-success' : 'is-danger'"
                :options="{
                  decimalPalces: 0,
                  emptyInputBehavior: 'zero'
                }"
                v-model="repuesto.cantidad"
                placeholder="Cantidad del repuesto..."
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
  name: "RepuestosFormulario",
  mixins: [baseFormulario],
  data() {
    return {
      entidad: "repuesto",
      repuesto: {
        nombre: "",
        precio: 0,
        cantidad: 0
      }
    };
  },
  computed: {},
  methods: {}
};
</script>
