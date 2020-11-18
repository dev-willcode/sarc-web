<template>
  <card-component title="Formulario">
    <div class="p-5">
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <seleccionar-entidad
          ref="SeleccionarCliente"
          label="Cliente"
          field-visible="nombre"
          v-model="vehiculo.cliente"
          :configuracion="configuraciones.cliente"
        />
        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Chasis"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input v-model="vehiculo.chasis" placeholder="chasis..." />
              <span class="has-text-danger">{{ errors[0] }}</span>
            </div>
          </b-field>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors, valid }">
          <b-field
            label="Matrícula"
            horizontal
            :type="errors[0] ? 'is-danger' : valid ? 'is-success' : ''"
          >
            <div class="row">
              <b-input
                v-model="vehiculo.matricula"
                placeholder="matrícula..."
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
import SeleccionarEntidad from "@/components/application/SeleccionarEntidad";

export default {
  name: "VehiculosFormulario",
  mixins: [baseFormulario],
  components: { SeleccionarEntidad },
  data() {
    return {
      entidad: "vehiculo",
      vehiculo: {
        cliente: null,
        chasis: "",
        matricula: ""
      }
    };
  },
  computed: {},
  methods: {
    // @Override
    despuesObtener(entidad) {
      this.$refs.SeleccionarCliente.establecerCampoVisible(
        entidad.nombre_cliente
      );
    }
  }
};
</script>
